import React from 'react'
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Header from '../Header'
import Home from '../Home'
import Login from '../Login'
import Dash from '../../routes/dash'

const AppPresenter = ({props,sideVisible,sideVisibleChange}) =>{
    console.log(props)
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/login" component={Login}/>
            <Route path="/dash" component={Dash}/>
        </BrowserRouter>
    )
}
export default AppPresenter