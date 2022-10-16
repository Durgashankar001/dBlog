import { getItem } from "../../Utils/localstorage";
import {
    SIGNUP_REQUEST, SIGNUP_FAILUER, SIGNUP_SUCCESS, LOGIN_FAILUER, LOGIN_REQUEST, LOGIN_SUCCESS
} from "./Auth.actionType"

const intialState = {
    userdetails: getItem("user") || "",
    token: getItem("token") || "",
    refresh_token: getItem("refresh_token") || "",
    login_loading: false,
    login_error: false,
    signup_loading: false,
    signup_error: false,
    message: ""
}

const authReducer = ( state = intialState,action)=>{
    switch(action.type){
        case SIGNUP_REQUEST:{
            return{
                ...state,
                signup_loading:true,
                signup_error:false
            }
        }
        case SIGNUP_FAILUER :{
            return {
                ...state,
                signup_error:true,
                signup_loading:false
            }
        }
        case SIGNUP_SUCCESS :{
            return {
                ...state,
                signup_error:false,
                signup_loading:false,
                message:action.payload.message
            }
        }
        case LOGIN_SUCCESS :{
            return {
                ...state,
                login_error:false,
                login_loading:false,
                userdetails:action.payload
            }
        }
        case LOGIN_REQUEST :{
            return {
                ...state,
                login_error:false,
                login_loading:true,
            }
        }
        case LOGIN_FAILUER :{
            return {
                ...state,
                login_error:true,
                login_loading:false,
            }
        }
    }
}