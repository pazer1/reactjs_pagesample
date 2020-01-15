import React, { Component } from 'react'
import SideNavPresenter from './SideNavPresenter'
import { BrowserRouter, Redirect, Route, Router, withRouter } from "react-router-dom";


export default class SideNavContainer extends Component {
    render() {
        return (
                <RouterSideNav></RouterSideNav>
        )
    }
}

const RouterSideNav = withRouter(SideNavPresenter);
