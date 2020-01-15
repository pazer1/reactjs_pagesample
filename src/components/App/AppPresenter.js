import React,{useState} from 'react'
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from '../Header'
import SideNav from '../SideNav'
import Login from '../Login'
import Dash from '../../routes/dash'
import Infra from '../../routes/infra'

const AppPresenter = () =>{

    const [isVisible,setVisible] = useState(true);

    const handleVisible = (newVisible)=>{
        setVisible(newVisible)
    }
    

    return(
        <BrowserRouter>
            <Header handleVisible={handleVisible}/>
            <div style={{display:'flex', flexDirection:'row'}}>
            {isVisible===true && <SideNav/> }
            <Switch>
                <Route exact path="/" component={Dash}/>
                <Route path="/infra" component={Infra}/>
                <Route path="/login" component={Login}/>
            </Switch>
            </div>
        </BrowserRouter>
    )
}
export default AppPresenter