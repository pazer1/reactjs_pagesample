import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import { NavLink,Link} from "react-router-dom";
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


const HeaderPresenter = ({handleVisible}) => {

    const activeStyle={
        fontWeight:'bold',
        color:'white'
    }

    return (
        <Navbar variant="dark" bg="dark" expand="sm">
            <NavLink to="/"><Navbar.Brand>Home</Navbar.Brand></NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* <NavDropdown title="sample" id="basic-nav-dropdown">
                        <NavDropdown.Item><NavLink to="/drop/sample1">sameple1</NavLink></NavDropdown.Item>
                        <NavDropdown.Item><NavLink to="/drop/sample2">sameple2</NavLink></NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Nav className="ml-auto">
                <Nav.Link as={NavLink} to="/login" >Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default HeaderPresenter