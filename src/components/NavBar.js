import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar, Brand, Toggle, Collapse} from 'react-bootstrap';

const NavBar = (props) => {
    
    return (

        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Movie Emporium</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <Nav.Link href='/genres'>All Genres</Nav.Link>
                <Nav.Link href='/movies'>All Movies</Nav.Link>
                <Nav.Link href='/genres/new'>Add New Genre</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        
        
    )
}

export default NavBar;