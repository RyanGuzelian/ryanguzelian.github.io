import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  box-shadow: var(--box-shadow);
  background-color: var(--white) !important;
  padding: 15px 0;
  
  .navbar-brand {
    font-weight: 700;
    color: var(--primary-color) !important;
    font-family: var(--header-font);
    font-size: 1.5rem;
  }
  
  .nav-link {
    color: var(--text-color) !important;
    font-weight: 500;
    margin: 0 10px;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--secondary-color);
      transition: var(--transition);
    }
    
    &:hover:after, &.active:after {
      width: 100%;
    }
    
    &:hover {
      color: var(--secondary-color) !important;
    }
    
    &.active {
      color: var(--secondary-color) !important;
    }
  }
`;

function Navigation({ changePage, currentPage }) {
  return (
    <StyledNavbar
      bg="light"
      data-bs-theme="light"
      sticky="top"
      expand="sm"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="#home">Ryan Guzelian</Navbar.Brand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">          <Nav className="ms-auto">
            <Nav.Link 
              onClick={() => changePage("home")} 
              className={currentPage === "home" ? "active" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              onClick={() => changePage("projects")} 
              className={currentPage === "projects" ? "active" : ""}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              onClick={() => changePage("about")} 
              className={currentPage === "about" ? "active" : ""}
            >
              About
            </Nav.Link>
            <Nav.Link 
              onClick={() => changePage("resume")} 
              className={currentPage === "resume" ? "active" : ""}
            >
              Resume
            </Nav.Link>
            <Nav.Link 
              onClick={() => changePage("contact")} 
              className={currentPage === "contact" ? "active" : ""}
            >
              Contact
            </Nav.Link>
          </Nav>
        </NavbarCollapse>
      </Container>
    </StyledNavbar>
  );
}

export default Navigation;
