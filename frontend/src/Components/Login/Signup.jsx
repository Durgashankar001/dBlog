import { Divider } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./Login.css"
import { FcGoogle } from "react-icons/fc"
import { BsGithub } from "react-icons/bs"
import { FaFacebookSquare } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { signUp } from '../../store/Auth/Auth.action'
import { useToast } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'
import Modals from '../../Utils/Modal'

const intialState = {
    name: "",
    age: "",
    email: "",
    password: ""
}

const Signup = () => {
    const [user, setUser] = useState(intialState)
    const [isOpen, setIsOpen] = useState(false)
    const allState = useSelector((state) => state.authReducer)
    const dispatch = useDispatch()
    const toast = useToast()
    const navigate = useNavigate()
    const handleChange = (e) => {
        const { name: key, value } = e.target
        setUser({
            ...user,
            [key]: value
        }
        )
    }
    const modalopen = () => {
        setIsOpen(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (user.name == "" || user.age == "" || user.email == "" || user.password == "") {
            return (
                toast({
                    title: "Please fill all the fields",
                    status: "warning",
                    position: "top",
                    duration: 5000,
                    isClosable: true,
                })
            )
        }
        if (user.password.length < 6) {
            return (
                toast({
                    title: "Password must be six characters long",
                    status: "warning",
                    position: "top",
                    duration: 5000,
                    isClosable: true,
                })
            )
        }
        return modalopen()
        dispatch(signUp(user, toast, navigate))
        setUser(intialState)
    }
    return (
        <div className='login'>
            <div className='login_div'>
                <h1 style={{ "textAlign": "center" }}>Sign up</h1>
                <div className='login_inner'>
                    <form action="" onSubmit={handleSubmit}>
                        {/* <label htmlFor="">Name</label> */}
                        <input type="text" placeholder='Enter Your Name' name="name" value={user.name} onChange={handleChange} />
                        {/* <label htmlFor="">Age</label> */}
                        <input type="text" placeholder='Enter Your age' name="age" value={user.age} onChange={handleChange} />
                        {/* <label htmlFor="">Email</label> */}
                        <input type="email" placeholder='Enter Your Email' name="email" value={user.email} onChange={handleChange} />
                        {/* <label htmlFor="">Password</label> */}
                        <input type="password" placeholder='Enter Your Password' name="password" value={user.password} onChange={handleChange} />
                        <button type="submit">sign up</button>
                    </form>
                    {/* <p style={{ "textAlign": "right", "fontSize": "0.8rem", "cursor": "pointer", "color": "blue" }}>(Forgot Password)</p> */}
                </div>
                <Divider />
                <div>
                    <p style={{ "textAlign": "center", "fontSize": "0.8rem", "cursor": "pointer", "color": "black", "marginTop": "10px" }}>OR</p>
                    <p style={{ "textAlign": "center", "fontSize": "0.8rem", "cursor": "pointer", "color": "black", "marginTop": "2px" }}>Sign in With</p>
                    <div className='icons'>
                        <FcGoogle size={20} className="child_icon" />
                        <BsGithub size={20} className="child_icon" />
                        <FaFacebookSquare size={20} className="child_icon" />
                    </div>
                    <p style={{ "textAlign": "center", "fontSize": "0.8rem", "cursor": "pointer", "color": "black", "marginTop": "20px", "width": "80%", "margin": "auto" }}>Click “Sign Up” to agree to dBlog's Terms of Service and acknowledge that dBlog’s Privacy Policy applies to you.</p>
                </div>
                <Modals isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
        </div>
    )
}

export default Signup