import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

beforeEach(() => {
  window.history.replaceState(null, '', '/');
  jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
});

afterEach(() => jest.restoreAllMocks());

test('rapid navigation stays on the latest destination when transition snapshots finish out of order', async () => {
  const callbacks = [];
  const originalTransition = document.startViewTransition;
  document.startViewTransition = update => {
    callbacks.push(update);
    return { skipTransition() {}, ready: Promise.resolve(), finished: Promise.resolve() };
  };
  try {
    render(<App />);
    fireEvent.click(screen.getByRole('link', { name: 'About' }));
    await waitFor(() => expect(window.location.hash).toBe('#about'));
    fireEvent.click(screen.getByRole('link', { name: 'Contact' }));
    await waitFor(() => expect(window.location.hash).toBe('#contact'));
    // The old page stays visible until the browser has captured its snapshot.
    expect(screen.getByRole('heading', { level: 1, name: /Software built with care/i })).toBeInTheDocument();
    act(() => callbacks.reverse().forEach(update => update()));
    const heading = screen.getByRole('heading', { level: 1, name: 'Let’s talk.' });
    expect(heading).toHaveFocus();
    expect(document.title).toBe('Contact | Ryan Guzelian');
  } finally {
    document.startViewTransition = originalTransition;
  }
});

test('a project deep link opens its case study and browser history returns to it', async () => {
  window.history.replaceState(null, '', '/#projects/condo');
  render(<App />);
  expect(await screen.findByRole('heading', { level: 1, name: /Condo Management/i })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('link', { name: 'Back to work' }));
  expect(await screen.findByRole('heading', { level: 1, name: 'Work' })).toBeInTheDocument();
  act(() => window.history.back());
  expect(await screen.findByRole('heading', { level: 1, name: /Condo Management/i })).toBeInTheDocument();
  act(() => window.history.forward());
  expect(await screen.findByRole('heading', { level: 1, name: 'Work' })).toBeInTheDocument();
});

test('an unknown project id falls back to the work listing', async () => {
  window.history.replaceState(null, '', '/#projects/does-not-exist');
  render(<App />);
  expect(await screen.findByRole('heading', { level: 1, name: 'Work' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Courtsy' })).toBeInTheDocument();
});

test('search and status filters combine and an empty result can be cleared', async () => {
  window.history.replaceState(null, '', '/#projects');
  render(<App />);
  const search = screen.getByRole('searchbox', { name: 'Search projects' });
  fireEvent.change(search, { target: { value: '  React Native  ' } });
  expect(screen.getByRole('heading', { name: 'MedcaConnect' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Courtsy' })).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'In progress' }));
  expect(screen.getByText('No projects match your search.')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Clear filters' }));
  expect(search).toHaveValue('');
  expect(screen.getByRole('heading', { name: 'Courtsy' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Blackout Launcher' })).toBeInTheDocument();
});

test('featured projects appear once and filtering stays applied after a case study', async () => {
  window.history.replaceState(null, '', '/#projects');
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Featured' }));
  expect(screen.getAllByRole('heading', { name: 'MedcaConnect' })).toHaveLength(1);
  expect(screen.queryByRole('heading', { name: 'Asteroids' })).not.toBeInTheDocument();
  fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'Medca' } });
  fireEvent.click(screen.getByRole('link', { name: 'View project: MedcaConnect' }));
  expect(await screen.findByRole('heading', { level: 1, name: 'MedcaConnect' })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('link', { name: 'Back to work' }));
  await waitFor(() => expect(screen.getByRole('searchbox')).toHaveValue('Medca'));
  expect(screen.getByRole('button', { name: 'Featured' })).toHaveAttribute('aria-pressed', 'true');
});

test('page changes update focus and title and preserve legacy page hashes', async () => {
  render(<App />);
  fireEvent.click(screen.getByRole('link', { name: 'About' }));
  const heading = await screen.findByRole('heading', { level: 1, name: 'About' });
  await waitFor(() => expect(heading).toHaveFocus());
  expect(document.title).toBe('About | Ryan Guzelian');
  expect(window.location.hash).toBe('#about');
  fireEvent.click(screen.getByRole('link', { name: 'Ryan Guzelian, home' }));
  expect(await screen.findByRole('heading', { level: 1, name: /Software built with care/i })).toBeInTheDocument();
});
