import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function CustomHeader() {
  return <>
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Master Stock</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/insights">Get Insights</Nav.Link>
          <Nav.Link href="/about">About us</Nav.Link>

        </Nav>
      </Container>
    </Navbar>
  </>;
}

export default CustomHeader;
