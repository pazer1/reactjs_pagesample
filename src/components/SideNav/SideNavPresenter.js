import React, { Component } from 'react'
import { NavLink  } from "react-router-dom";
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { BrowserRouter, Redirect, Route, Router, withRouter } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Dash from '../../routes/dash'
import Infra from '../../routes/infra'

export default class SideNavPresenter extends Component {

    render() {

        const style = {
            display:'flex',
            flexDirection:'row',
            height:'calc(100vh - 48px)',
            width:'75px',
            zIndex:'1',
            top:'3.4em',
            backgroundColor:'#222',
            paddingTop:'10px',
            color:'white',
        }

        const activeStyle={
            color:'white'
        }

        console.log("sideNav",this.props);
        return (
            <>
            {this.props.location.pathname === "/login" ? null: 
                  <Nav className="flex-column" style={style}>
                  <Nav.Link as={NavLink} exact to='/' activeStyle={activeStyle}>Dash</Nav.Link>
                  <Nav.Link as={NavLink} exact to='/infra' activeStyle={activeStyle}>Infra</Nav.Link>
                  <Nav.Link as={NavLink} exact to='/Pods' activeStyle={activeStyle}>Pods</Nav.Link>
                  {/* <Nav.Link eventKey="disabled" disabled>
                  Disabled
                  </Nav.Link> */}
              </Nav>
            }
      
            </>
        )
    }
}

