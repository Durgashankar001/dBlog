import { AxiosError } from "axios";
import { getItem, setItem } from "../../Utils/localstorage";
import {
    SIGNUP_REQUEST, SIGNUP_FAILUER, SIGNUP_SUCCESS, LOGIN_FAILUER, LOGIN_REQUEST, LOGIN_SUCCESS
} from "./Auth.actionType"

const intialState = {
    userdetails: getItem("dBlog_user") || "",
    token: getItem("token") || "",
    refresh_token: getItem("refresh_token") || "",
    login_loading: false,
    login_error: false,
    signup_loading: false,
    signup_error: false,
    signup_success:false,
    signup_message: "",
    login_message: ""
}

export const authReducer = ( state = intialState,action)=>{
    switch(action.type){
        case SIGNUP_REQUEST:{
            return{
                ...state,
                signup_loading:true,
                signup_error:false,
                err_code:""
            }
        }
        case SIGNUP_FAILUER :{
            return {
                ...state,
                signup_error:true,
                signup_loading:false,
            }
        }
        case SIGNUP_SUCCESS :{
            return {
                ...state,
                signup_error:false,
                signup_loading:false,
                signup_success:true,
                signup_message:action.payload.message,
                
            }
        }
        case LOGIN_SUCCESS :{
            setItem("token",action.payload.token)
            setItem("refresh_token",action.payload.refresh_token)
            setItem("dBlog_user",action.payload.userDetails)
            return {
                ...state,
                login_error:false,
                login_loading:false,
                userdetails:action.payload.userDetails,
                token:action.payload.token,
                refresh_token:action.payload.refresh_token
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
        default:{
            return {
                state
            }
        }
    }
}