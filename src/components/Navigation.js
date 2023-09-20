import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

function Navigation() {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      sticky="top"
      expand="sm"
      className="bg-body-tertiary justify-content-center"
    >
      <Container>
        <Navbar.Brand href="/home">Ryan Guzelian</Navbar.Brand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            {/* <Nav.Link href="/contact">Contact</Nav.Link> */}
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
