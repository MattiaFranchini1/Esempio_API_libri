//navbar e link

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <Navbar expand="lg" style={{backgroundColor: '#31363F'}}>
      <Container>
        <Navbar.Brand style={{color: 'white'}} href="/">FRANK-LIBRARY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{color: 'white'}} href="/add">Aggiungi</Nav.Link>
            <Nav.Link style={{color: 'white'}} href="/delete">Elimina</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;