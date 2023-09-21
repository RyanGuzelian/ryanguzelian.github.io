import React, { useState } from "react";
import Home from "./pages/Home";
import "./App.css";
import Navigation from "./components/Navigation";
import GlobalStyles from "./components/GlobalStyles";
import "bootstrap/dist/css/bootstrap.css";
import Projects from "./pages/Projects";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === "home") {
      return <Home />;
    } else if (currentPage === "projects") {
      return <Projects />;
    }
  };

  return (
    <div>
      <GlobalStyles />
      <Navigation changePage={changePage} />
      {renderPage()}
    </div>
  );
}

export default App;
