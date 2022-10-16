import axios from "axios"
import { LOGIN_FAILUER, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILUER, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./Auth.actionType"

export const signup_succ = (data) => ({
    type: SIGNUP_SUCCESS,
    payload: data,
});

export const signup_req = () => ({
    type: SIGNUP_REQUEST,
});

export const signup_fail = (data) => ({
    type: SIGNUP_FAILUER,
    payload: data
});

export const login_fail = () => ({
    type: LOGIN_FAILUER,
});

export const login_succ = (data) => ({
    type: LOGIN_SUCCESS,
    payload: data,
});

export const login_req = () => ({
    type: LOGIN_REQUEST,
});
export const signUp = (user,toast,navigate) => (dispatch) => {
    const { email, password, age, name } = user
    dispatch(signup_req())
    try {
        return axios.post("http://localhost:8080/user/signup", {
            data: {
                name: name,
                email: email,
                age: age,
                password: password
            }
        }).then((res) => {
            dispatch(signup_succ(res.data))
            toast({
                title: "Account created Successfully",
                description: "Enhance your knowldge by exploring new things",
                status: "success",
                position: "top",
                duration: 5000,
                isClosable: true,
            })
            navigate("/login")
        }).catch((e) => {
            console.log(e.response.status)
            dispatch(signup_fail(e.response.status))
            if (e.response.status == "403") {
                toast({
                    title: "Account already exist",
                    description: "Please try with same credentials",
                    status: "error",
                    position: "top",
                    duration: 5000,
                    isClosable: true,
                })

            }
            else if (e.response.status == "500") {
                toast({
                    title: "Internal server error",
                    description: "Please try after some time",
                    status: "error",
                    position: "top",
                    duration: 5000,
                    isClosable: true,
                })
            }

        })
    } catch (e) {
        dispatch(signup_fail())
        toast({
            title: "Internal server error",
            description: "Please try after some time",
            status: "error",
            position: "top",
            duration: 5000,
            isClosable: true,
        })
    }
}
export const signIn = (user,toast,navigate) => (dispatch) => {
    const { email, password} = user
    dispatch(login_req())
    try {
        return axios.post("http://localhost:8080/user/login", {
            data: {
                email: email,
                password: password
            }
        }).then((res) => {
            dispatch(login_succ(res.data))
            toast({
                title: "Account created Successfully",
                description: "Enhance your knowldge by exploring new things",
                status: "success",
                position: "top",
                duration: 5000,
                isClosable: true,
            })
            navigate("/")
        }).catch((e) => {
            console.log(e.response.status)
            dispatch(signup_fail(e.response.status))
            if (e.response.status == "401") {
                toast({
                    title: "No account registered with this credentials",
                    description: "Please try with same credentials",
                    status: "error",
                    position: "top",
                    duration: 5000,
                    isClosable: true,
                })

            }
            else if (e.response.status == "500") {
                toast({
                    title: "Internal server error",
                    description: "Please try after some time",
                    status: "error",
                    position: "top",
                    duration: 5000,
                    isClosable: true,
                })
            }

        })
    } catch (e) {
        dispatch(login_fail())
        toast({
            title: "Internal server error",
            description: "Please try after some time",
            status: "error",
            position: "top",
            duration: 5000,
            isClosable: true,
        })
    }
}