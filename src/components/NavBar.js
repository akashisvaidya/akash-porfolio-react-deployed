import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export const NavBar = () => {
  return (
    <div id="navBar">
      <Navbar fixed="top" bg="light" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#">
            <a class="navbar-brand" href="#">
              <code>&lt;--Go to Home page-- &gt;</code>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 md-nav"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#contact">Connect</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
