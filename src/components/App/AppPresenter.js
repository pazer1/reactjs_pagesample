import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from '../Header'
import Home from '../Home'
import Login from '../Login'
import Dash from '../../routes/dash'
import Infra from '../../routes/infra'

const AppPresenter = ({props,sideVisible,sideVisibleChange}) =>{
    console.log(props)
    return(
        <BrowserRouter>
            <Header/>
            <Home/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/dash" component={Dash}/>
            <Route exact path="/infra" component={Infra}/>
        </BrowserRouter>
    )
}
export default AppPresenter