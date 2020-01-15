import React,{Component} from 'react'
import AppPresenter from './AppPresenter'

class AppContainer extends React.Component{
    render(){
        console.log("AppContainer",this.props)
        return(
            <AppPresenter/>
        )
    }
}

export default AppContainer