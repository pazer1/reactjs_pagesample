import LoginPresenter from './LoginPresenter'
import React, { Component } from 'react'
import {connect} from 'react-redux'

 class LoginContainer extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <LoginPresenter/>
            </div>
        )
    }
}

export default connect()

