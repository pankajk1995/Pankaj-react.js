import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

  import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="'bg-body-sucess'" style={{marginRight:'560px'}}>
        <Navbar.Brand href="#home"><img src="https://cdn.cookielaw.org/logos/215b83c1-e050-4276-906c-e65481a36156/4e0ec566-94a6-4ca8-9bde-a3e502094286/240d2370-ed0a-4f7c-b2fa-6d10b13ac82c/logo-classicblue-3000px-OneTrust.png" alt="" height={80} width={200}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><h3>Home 🏠</h3></Nav.Link>
            <Nav.Link href="#link"><h3>About 🆎</h3></Nav.Link>
            <Nav.Link href="#link"><h3>Service 🖥</h3></Nav.Link>      
          </Nav>
          <Nav.Link href="#link" className="me-right" style={{marginRight:'-300px'}}><h3>Log In🔓</h3></Nav.Link>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;