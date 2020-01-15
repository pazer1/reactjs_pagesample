import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import logo from '../../images/quantum_cloud_logo.PNG';

class LoginPresenter extends Component{
    constructor(props){
        super(props);

        this.state={
            username:'',
            password:'',
        }
    }

    onSubmit= (e)=>{
        e.preventDefault(); //서버로 서브밋 되는것을 막는다

        const username = this.username;
        const password = this.password;

        console.log(username);
        console.log(password);

        
        /*this.props.dispatch({type:"ADD_POST", data:{writer:writer, 
                                                    contents:contents,
                                                  title:title}});
         */
        // this.props.dispatch(insert({writer:writer,
        //                             contents:contents,
        //                             title:title}));

    }
    render(){
        return(
            <div class="d-flex justify-content-center" style={{justifySelf:'center' ,width:'100%'}}>
                <div class="card bg-light w-25 p-5 mt-5">
                    <div className="w-100 d-flex justify-content-center">
                        <img src={logo} alt="logo" class="w-75"></img>
                    </div>
                    <form onSubmit={this.onSubmit} class="h-75 mt-5 text-right">
                        <input type="text" 
                            class="form-control"
                            placeholder="아이디"
                            onChange={(e)=>this.username=e.target.value} />
                        <br/>
                        <input type="password" 
                            class="form-control"
                            placeholder="비밀번호"
                            onChange={(e)=>this.password=e.target.value}  />
                        <br/>

                        <button class="btn btn-primary">로그인</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPresenter;
