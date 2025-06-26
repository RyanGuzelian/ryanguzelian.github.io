import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    // --primary-color: #4a90e2;
    // --secondary-color:rgb(58, 58, 58);
    // --text-color: #333333;
    // --light-bg: #f5f7fa;
    // --white: #ffffff;
    // --light-gray: #eaeaea;
    --primary-color: #6c5ce7;     // Vibrant purple - main accent
  --secondary-color: #2d3436;   // Near-black - secondary elements
  --text-color: #2d3436;        // Near-black text
  --light-bg: #f9f9f9;          // Off-white background
  --white: #ffffff;             // White
  --light-gray: #e0e0e0;
    --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --border-radius: 8px;
    --transition: all 0.3s ease;
    --header-font: 'Montserrat', sans-serif;
    --body-font: 'Open Sans', sans-serif;
  }
  
  body {
    background-color: var(--light-bg);
    margin: 0;
    padding: 0;
    color: var(--text-color);
    font-family: var(--body-font);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--header-font);
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: var(--transition);
    
    &:hover {
      color: darken(var(--primary-color), 10%);
    }
  }
`;

export default GlobalStyles;
