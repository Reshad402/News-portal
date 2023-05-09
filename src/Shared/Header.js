import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { ButtonToolbar, Image } from 'react-bootstrap';

const Header = () => {
  const {user,logOut} = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
    .then(() => {

    })
    .catch((e) => {
      console.error(e)
    })
  }

    return (
    <Navbar bg="light" expand="lg" className='mb-3'>
      <Container fluid>
        <Navbar.Brand><Link to="/">Navbar scroll</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className='me-2'>
            <Link to='/login' bg-light> <b>Login</b></Link>
            <Link to='/register' bg-light> <b>Register</b></Link>
            </div>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className='me-5'>Search</Button>
          </Form>
            <Nav.Link eventKey={1} href="#" className='me-4' >

    

          
             <>
            {user?.displayName}:
            <button onClick={handleLogOut}>Logout</button>
            </> 
          
          {/* {
                                                //!Cannot use uid
            user?.uid ?
            <>
            <span>{user?.displayName}</span>
            <button onClick={handleLogOut}>Logout</button>
            </>
            :

            <>
            <link to='/login'>Login</link>
            <link to='/register'>Register</link>
            </>
          } */}

            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes"  >
              {
                user?.photoURL?
                <Image style={{height:'40px'}} roundedCircle src={user?.photoURL} ></Image>
                :
                <FaUser></FaUser>
                
              
              }
              
            </Nav.Link>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;