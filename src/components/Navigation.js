import React from 'react';
import styled from 'styled-components';
import { Container } from './UI';

const Header = styled.header`
  padding: 28px 0;
  .header-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; }
  .brand { font-size: 23px; font-weight: 600; letter-spacing: -.04em; text-decoration: none; white-space: nowrap; }
  nav { display: flex; gap: 30px; }
  nav a { text-decoration: none; min-height: 44px; display: flex; align-items: center; }
  nav a[aria-current="page"] { text-decoration: underline; text-decoration-color: var(--cobalt); }
  nav a:hover { text-decoration: underline; }
  @media (max-width: 600px) {
    padding: 20px 0 8px;
    .header-inner { flex-wrap: wrap; gap: 8px; }
    nav { width: 100%; justify-content: space-between; gap: 12px; font-size: 17px; }
  }
`;
const SkipLink = styled.a`
  position: absolute; left: 16px; top: 8px; z-index: 10;
  padding: 10px 18px; background: var(--white); transform: translateY(-180%);
  &:focus { transform: translateY(0); }
`;
export default function Navigation({ currentPage }) {
  return (
    <Header>
      <SkipLink href="#main-content" onClick={event => {
        event.preventDefault();
        document.getElementById('main-content')?.focus();
      }}>Skip to content</SkipLink>
      <Container className="header-inner">
        <a className="brand" href="#home" aria-label="Ryan Guzelian, home">Ryan Guzelian</a>
        <nav aria-label="Main navigation">
          {[['projects', 'Work'], ['about', 'About'], ['resume', 'Resume'], ['contact', 'Contact']].map(([page, label]) => (
            <a key={page} href={`#${page}`} aria-current={currentPage === page ? 'page' : undefined}>{label}</a>
          ))}
        </nav>
      </Container>
    </Header>
  );
}
