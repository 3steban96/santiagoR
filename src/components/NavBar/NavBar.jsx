import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavBar.css';

export default function NavBar() {
  return (
    <Navbar expand="lg" className="navContainer shadow-sm sticky-top">
      <Container fluid className="px-5">
        <Navbar.Brand href="#home" className="fw-bold text-dark">
          Santiago R.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto gap-3">
            <Nav.Link href="#home" className="nav-link-custom">Inicio</Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom">Sobre mí</Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom">Proyectos</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
