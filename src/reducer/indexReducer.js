import {handleActions} from 'redux-actions';

const LOGIN_ROUTER = "LOGIN_PAGE";

export const isLoginPage = () =>{
    return dispatch =>{
        dispatch({type:LOGIN_ROUTER})
    }
}

const initState = {
    isLoginPage:false,
}

const handleActionObj = {
    [LOGIN_ROUTER]:()=>{
        return{
            isLoginPage:!isLoginPage
        }
    }
}

export default handleActions(handleActionObj,initState)