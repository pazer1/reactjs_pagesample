import React from 'react';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux';
import AppContainer from './components/App'
import HeaderContainer from './components/Header'
import { BrowserRouter, Redirect, Route } from "react-router-dom";

export default class App extends React.Component{
    render(){
        return (
            <AppContainer/>
        )
    }
}