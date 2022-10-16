import { Divider } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./Login.css"
import { FcGoogle } from "react-icons/fc"
import { BsGithub } from "react-icons/bs"
import { FaFacebookSquare } from "react-icons/fa"
const intialState = {
    email: "",
    password: ""
}

const Login = () => {
    const [user, setUser] = useState(intialState)
    const handleChange = (e) =>{
        const {name:key,value} = e.target
        setUser({
            ...user,
            [key]:value
        })
    }
    console.log(user)
    return (
        <div className='login'>
            <div className='login_div'>
                <h1 style={{ "textAlign": "center" }}>Login</h1>
                <div className='login_inner'>
                    <form action="">
                        {/* <label htmlFor="">Name</label> */}
                        {/* <input type="text" placeholder='Enter Your Name' name="name" /> */}
                        {/* <label htmlFor="">Age</label> */}
                        {/* <input type="text" placeholder='Enter Your age' name="age" /> */}
                        {/* <label htmlFor="">Email</label> */}
                        <input type="email" placeholder='Enter Your Email' name="email" onChange={handleChange} value={user.email} />
                        {/* <label htmlFor="">Password</label> */}
                        <input type="password" placeholder='Enter Your Password' name="password" onChange={handleChange} value={user.password} />
                        <button type="submit">login</button>
                    </form>
                    <p style={{ "textAlign": "right", "fontSize": "0.8rem", "cursor": "pointer", "color": "blue" }}>(Forgot Password)</p>
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
                    <p style={{ "textAlign": "center", "fontSize": "0.8rem", "cursor": "pointer", "color": "black", "marginTop": "20px", "width": "80%", "margin": "auto" }}>Click “Login” to agree to dBlog's Terms of Service and acknowledge that dBlog’s Privacy Policy applies to you.</p>
                </div>

            </div>
        </div>
    )
}

export default Login