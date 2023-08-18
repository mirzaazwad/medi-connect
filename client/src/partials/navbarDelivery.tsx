import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate} from 'react-router-dom';
import '../assets/css/navbar.css';

const NavbarDelivery=()=>{

  const navigate=useNavigate();


  const handleLogout = () =>{
    return navigate('/');
  }
  return (
    <Navbar className='customNavbar fixed-top ' variant="dark" expand="lg">
      <Container fluid className='navbarContents px-0 px-lg-5 d-flex justify-content-between' >
        <Navbar.Brand className='px-2'  href={`/profileDelivery`}>M e d G u a r d</Navbar.Brand>
        <Navbar.Toggle className='px-2' aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 px-2"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            <Nav.Link href={`/delivery/profile`}>Profile</Nav.Link>
            <Nav.Link href={`/delivery/request`}>Requests</Nav.Link>
            <Nav.Link href={`/delivery/ongoing`}>Ongoing</Nav.Link>
            <Nav.Link href={`/delivery/history`}>History</Nav.Link>
            <Nav.Link href={`/delivery/chat`}>Chats</Nav.Link>
            <Nav.Link className="d-block d-lg-none" onClick={handleLogout}>Log Out</Nav.Link>
          </Nav>
          <div className="customLogOut d-none d-lg-flex justify-content-end">
          <Button className='btn customButton' onClick={handleLogout}>Log Out</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavbarDelivery;

