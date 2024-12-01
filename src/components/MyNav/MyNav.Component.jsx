import React from "react";
import { useState, useContext} from "react";

//bootstrap-react imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './MyNav.Style.css'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


//context import 
import {ThemeContext} from "../../Contexts/context"


function MyNav({handleChange, toggleTheme}) {
  
  const [checked, setChecked] = useState(false);
  const theme= useContext(ThemeContext);
   
  return (
    <Navbar  expand="lg"
    className={`Custom-Navbar ${theme === "dark" ? "bg-dark navbar-dark" : "bg-light navbar-light"}`}
    data-bs-theme={theme}>
      <Container>
        <Navbar.Brand href="#home"className="nav-link-custom">EPIBOOKS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-2">
            <Nav.Link href="#" className="nav-link-custom" >Home</Nav.Link>
            <Nav.Link href="#" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#" className="nav-link-custom">Browse</Nav.Link>
            <ButtonGroup className="mb-2">
        <ToggleButton
          id="toggle-check"
          type="checkbox"
          variant="outline-"
          checked={checked}
          value="1"
          onChange={(e) =>{
            toggleTheme();
            setChecked(e.currentTarget.checked);
          }}
        >
          {checked ? "Light" : "Dark"}
        </ToggleButton>
      </ButtonGroup>
     </Nav>
        </Navbar.Collapse>
  <Form className="d-flex" onChange={(e) => handleChange(e)}>
          <Form.Control
            type="text"
            placeholder="Cerca libro"
            className="mr-sm-2 Custom-Input "
          />
          <Button className="ms-4 Custom-Button" variant="outline-success" type="submit">Cerca</Button>
        </Form>

      </Container>
    </Navbar>
  );
}

export default MyNav;
