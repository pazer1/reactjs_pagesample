import React, { Component } from 'react'
import { NavLink  } from "react-router-dom";
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { BrowserRouter, Redirect, Route, Router } from "react-router-dom";
import Container from 'react-bootstrap/Container'

export default class HomePresenter extends Component {
    render() {
        console.log(this.props)
        return (
                <Nav className="flex-column">
                    <Nav.Link as={NavLink} to={`/dash`}>Dash</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>
                    Disabled
                    </Nav.Link>
                </Nav>
        )
    }
}
