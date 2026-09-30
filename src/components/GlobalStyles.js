import { createGlobalStyle } from "styled-components";

/**
 * Windows 98 desktop tokens. A committed single-theme world — every colour is
 * painted explicitly, there is no light/dark variant, and the bevel system in
 * styles/win98.js is the whole visual language.
 */
const GlobalStyles = createGlobalStyle`
  :root {
    --desktop: #008080;
    --face: #C0C0C0;
    --face-light: #DFDFDF;
    --white: #FFFFFF;
    --shadow: #808080;
    --dark: #000000;
    --title-a1: #000080;
    --title-a2: #1084D0;
    --title-i1: #808080;
    --title-i2: #B5B5B5;
    --sel: #000080;
    --field: #FFFFFF;
    --ink: #000000;
    --link: #0000CC;

    --ui: Tahoma, "MS Sans Serif", Verdana, Geneva, sans-serif;
    --taskbar-h: 40px;

    color-scheme: light;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  body {
    background: var(--desktop);
    color: var(--ink);
    font-family: var(--ui);
    font-size: 13px;
    line-height: 1.45;
    overflow-x: hidden;
  }

  #root {
    min-height: 100%;
  }

  h1, h2, h3, h4 {
    margin: 0;
    font-weight: 700;
  }

  p {
    margin: 0;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: var(--link);
  }

  a:hover {
    color: #0000FF;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    font-family: var(--ui);
    color: inherit;
  }

  ::selection {
    background: var(--sel);
    color: var(--white);
  }

  @media (max-width: 820px) {
    body {
      font-size: 14px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.001ms !important;
      transition-duration: 0.001ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyles;
