import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Header = () => {
  const {user} = useContext(AuthContext)
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
            <Nav.Link bg="light" href="#action1"><b>Home</b> </Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
                
              <NavDropdown.Item href="#action3"><b>Action</b></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
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
            <Nav.Link href="#"  >
              <b>{user?.displayName}</b>
            </Nav.Link>
            <img>

            </img>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;