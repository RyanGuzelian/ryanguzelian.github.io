import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import "./App.css";
import Navigation from "./components/Navigation";
import GlobalStyles from "./components/GlobalStyles";
import "bootstrap/dist/css/bootstrap.css";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

// Import Google Fonts
const FontStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap');
`;

const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.main`
  flex: 1;
`;

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  useEffect(() => {
    // Get page from URL hash if it exists
    const hash = window.location.hash.replace('#', '');
    if (hash && ["home", "projects", "about", "contact", "resume"].includes(hash)) {
      setCurrentPage(hash);
    }
    
    // Update hash when page changes
    window.addEventListener('hashchange', () => {
      const newHash = window.location.hash.replace('#', '');
      if (newHash && ["home", "projects", "about", "contact", "resume"].includes(newHash)) {
        setCurrentPage(newHash);
      }
    });
  }, []);

  const changePage = (page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo(0, 0);
  };
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "projects":
        return <Projects />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return <Home />;
    }
  };

  return (
    <MainContainer>
      <FontStyles />
      <GlobalStyles />
      <Navigation changePage={changePage} currentPage={currentPage} />
      <ContentWrapper>
        {renderPage()}
      </ContentWrapper>
      <Footer changePage={changePage} />
    </MainContainer>
  );
}

export default App;
