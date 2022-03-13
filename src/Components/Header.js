import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar,Form,FormControl,NavDropdown,Nav,Button,Container} from 'react-bootstrap';
import Data from './Data'



const Header = () => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Link style={{ padding: 8 }} to="/">Counters</Link>
        <Link  style={{ padding: 8 }} to="/Folders">Folders</Link>
       
        <Link  style={{ padding: 8 }}to="/Axios">Axios</Link>
        <Link style={{ padding: 8 }} to="/Hooks">Hooks</Link>
      </Nav>
    
        <Button variant="outline-success">Search</Button>
  
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header