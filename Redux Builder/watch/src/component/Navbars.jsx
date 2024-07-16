import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 //
const Navbars = () => {
  return (
    <div>
       <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as ={Link} to='/catalogue'>CATALOGUE</Nav.Link>
            <Nav.Link href="/vintage">VINTAGE</Nav.Link>
            <Nav.Link href="/investir">INVESTIR</Nav.Link>
            <Nav.Link href="/financer">FINANCER</Nav.Link>
            <Nav.Link href="/showroom">SHOWROOM</Nav.Link>
            <Nav.Link href="/lexique">LEXIQUE</Nav.Link>
            <Nav.Link href="/videos">VIDEOS</Nav.Link>
            <Nav.Link href="/prix">PRIX DU NEUF </Nav.Link>
            <Nav.Link href="/blog">BLOG</Nav.Link>
            <Nav.Link href="/monters">MONTERS D'EXCEPTION </Nav.Link>
            <Nav.Link href="/contact">CONTACT </Nav.Link>
            
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbars
