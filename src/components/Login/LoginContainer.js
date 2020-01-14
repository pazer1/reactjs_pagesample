import LoginPresenter from './LoginPresenter'
import React, { Component } from 'react'

export default class LoginContainer extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <LoginPresenter/>
            </div>
        )
    }
}
