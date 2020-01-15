import React,{Component} from 'react';
import HeaderPresenter from './HeaderPresenter'

export default class HeaderContainer extends React.Component{

    render(){
        const {handleVisible} = this.props
        return(
            <HeaderPresenter handleVisible ={handleVisible}/>
        )
    }

}