import { Navbar,Container,Nav } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import logo from '../assets/nesLogo.png';


const NavBar = ()=>{
    return  <>
         
         <Navbar bg="dark" variant="dark">
        <Container>
            
           
          
            <Nav className="me-auto">
          <Navbar.Brand as={NavLink} to='/'>
          <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            PNG News{' '}
            </Navbar.Brand>
          <Nav.Link  as={NavLink} to='/home'>Home</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            
            <Nav.Link  as={NavLink} to='/contact'>Contact Us</Nav.Link>
            <Nav.Link  as={NavLink} to='/about'>About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    
    </>
    
}  
    
export default NavBar;