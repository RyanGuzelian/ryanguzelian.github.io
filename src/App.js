import React, { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import GlobalStyles from './components/GlobalStyles';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import projects from './data/projects';
import { readRoute } from './navigation';

const titles = { home: 'Software developer', projects: 'Work', about: 'About', resume: 'Resume', contact: 'Contact' };

export default function App() {
  const [route, setRoute] = useState(() => readRoute(window.location.hash, projects));
  const mainRef = useRef(null);
  const previousRoute = useRef(route);

  useEffect(() => {
    let disposed = false;
    let transition;
    const updateRoute = () => {
      if (disposed) return;
      // Read the current hash here, not at click time: interrupted snapshots
      // must never restore a destination the visitor has already left.
      flushSync(() => setRoute(readRoute(window.location.hash, projects)));
    };
    const onHashChange = () => {
      transition?.skipTransition();
      const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      if (!document.startViewTransition || reducedMotion) {
        updateRoute();
        return;
      }
      try {
        transition = document.startViewTransition(updateRoute);
        // A skipped or hidden-document transition still applies its DOM update.
        transition.ready.catch(() => {});
        transition.finished.catch(() => {});
      } catch {
        updateRoute();
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => {
      disposed = true;
      transition?.skipTransition();
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  useEffect(() => {
    document.title = `${route.project?.title || titles[route.page]} | Ryan Guzelian`;
    window.scrollTo(0, 0);
    mainRef.current?.querySelector('h1')?.focus({ preventScroll: true });
    const changed = previousRoute.current.page !== route.page || previousRoute.current.project !== route.project;
    previousRoute.current = route;
    // Older browsers get a simple entrance fade. No animation on initial load.
    if (changed && !document.startViewTransition &&
        !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      const animation = mainRef.current?.animate?.(
        [{ opacity: 0 }, { opacity: 1 }],
        { duration: 260, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
      );
      return () => animation?.cancel();
    }
  }, [route]);

  return (
    <div className="site-shell">
      <GlobalStyles />
      <Navigation currentPage={route.page} />
      <main ref={mainRef} id="main-content" tabIndex={-1}>
        {route.page === 'home' && <Home />}
        {route.page === 'projects' && <Projects selectedProject={route.project} />}
        {route.page === 'about' && <About />}
        {route.page === 'resume' && <Resume />}
        {route.page === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
}
