import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './MyNav.Style.css'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function MyNav({handleChange}) {
   return (
    <Navbar expand="lg" className="Custom-Navbar">
      <Container>
        <Navbar.Brand href="#home">EPIBOOKS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
  <Form className="d-flex" onChange={(e) => handleChange(e)}>
          <Form.Control
            type="text"
            placeholder="Cerca libro"
            className="mr-sm-2"
          />
          <Button className="ms-4 Custom-Button" variant="outline-success" type="submit">Cerca</Button>
        </Form>

      </Container>
    </Navbar>
  );
}

export default MyNav;
