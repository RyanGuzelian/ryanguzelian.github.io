import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --mist: #E6F3FB; --navy: #071833; --cobalt: #0052D9;
    --secondary: #42566F; --line: #BDCFDF; --white: #FFFFFF;
    --display: 'Barlow Condensed', 'Arial Narrow', sans-serif;
    --body: 'Source Sans 3', 'Segoe UI', sans-serif;
    --motion-fast: 180ms;
    --motion-page: 260ms;
    --motion-ease: cubic-bezier(.22, 1, .36, 1);
  }
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: auto; }
  body {
    margin: 0; background: var(--mist); color: var(--navy);
    font-family: var(--body); font-size: 18px; line-height: 1.55;
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, h4, p, figure { margin: 0; }
  h1, h2, h3, h4 { line-height: 1.05; font-weight: 600; }
  h1, h2 { font-family: var(--display); }
  a { color: inherit; text-underline-offset: .22em; }
  a:hover { color: var(--cobalt); }
  button, input { font: inherit; }
  button, a { -webkit-tap-highlight-color: transparent; }
  a, button, input {
    transition: color var(--motion-fast) ease,
      background-color var(--motion-fast) ease,
      border-color var(--motion-fast) ease,
      text-decoration-color var(--motion-fast) ease;
  }
  button { cursor: pointer; }
  img, svg { max-width: 100%; display: block; }
  img { height: auto; }
  ::selection { background: var(--cobalt); color: var(--white); }
  :focus-visible { outline: 3px solid var(--cobalt); outline-offset: 5px; }
  h1[tabindex="-1"]:focus, main[tabindex="-1"]:focus { outline: none; }
  .site-shell { display: flex; flex-direction: column; min-height: 100vh; }
  main { flex: 1; min-width: 0; }
  @keyframes page-out { to { opacity: 0; } }
  @keyframes page-in { from { opacity: 0; } }
  ::view-transition-group(root) { animation-duration: var(--motion-page); }
  ::view-transition-old(root) { animation: page-out 140ms ease-out both; }
  ::view-transition-new(root) {
    animation: page-in var(--motion-page) var(--motion-ease) both;
    mix-blend-mode: normal;
  }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after, ::view-transition-group(root),
    ::view-transition-old(root), ::view-transition-new(root) {
      animation: none !important; transition: none !important; scroll-behavior: auto !important;
    }
  }
`;
