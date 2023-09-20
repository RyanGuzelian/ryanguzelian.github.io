import Home from "./pages/Home";
import "./App.css";
import Navigation from "./components/Navigation";
import GlobalStyles from "./components/GlobalStyles";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Projects from "./pages/Projects";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
