import 'bootstrap/dist/css/bootstrap.min.css';
import {Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Nacbre() {
  return (
    <>
<Navbar bg="dark" data-bs-theme="dark" className='mb-5'>
<Container>
  <Navbar.Brand >mhmdrezachizari</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link> <Link to='/' className='nav-link'>shopping</Link> </Nav.Link>
    <Nav.Link><Link to='/features' className='nav-link'>features</Link></Nav.Link>
    <Nav.Link><Link to='/pricing' className='nav-link'>pricing</Link></Nav.Link>
  </Nav>
</Container>
</Navbar>
    </>
  );
}

export default Nacbre;

<Navbar bg="dark" data-bs-theme="dark">
<Container>
  <Navbar.Brand >mhmdrezachizari</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link> <Link to='/' className='nav-link'>shopping</Link> </Nav.Link>
    <Nav.Link><Link to='/features' className='nav-link'>features</Link></Nav.Link>
    <Nav.Link><Link to='/pricing' className='nav-link'>pricing</Link></Nav.Link>
  </Nav>
</Container>
</Navbar>