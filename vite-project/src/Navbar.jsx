import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from './logo.png';

function NavbarComp() {
  return (
    <Navbar expand='lg' className='bg-danger'>
      <Container>
        <Navbar.Brand href='/' className='text-white'>
          ExportPulse
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link to='/' className='text-white mx-3'>
              Quote
            </Link>
            <Link to='/history' className='text-white mx-3'>
              History
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
