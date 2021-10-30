import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/foody.png';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="white" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="/home">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} className="text-dark" to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/addFood">Add Food</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/myorders">My Orders</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/manageorders">Manage All Orders</Nav.Link>
                        <Navbar.Text className="text-dark">
                            <a href="#login" className="text-dark">{user?.displayName}</a>
                        </Navbar.Text> 
                        {
                            (!user?.email) ?
                            <Nav.Link as={Link} className="text-dark" to="/login">
                                Login
                            </Nav.Link> 
                            :
                            <button onClick={logOut} variant="light">Logout</button>
                        }
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;