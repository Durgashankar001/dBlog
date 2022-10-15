import { Divider } from '@chakra-ui/react'
import React from 'react'
import "./Login.css"
import { FcGoogle } from "react-icons/fc"
import { BsGithub } from "react-icons/bs"
import { FaFacebookSquare } from "react-icons/fa"

const Login = () => {
    return (
        <div className='login'>
            <div className='login_div'>
                <h1 style={{ "textAlign": "center" }}>Signup</h1>
                <div className='login_inner'>
                    <form action="">
                        {/* <label htmlFor="">Name</label> */}
                        <input type="text" placeholder='Enter Your Name' name="name" />
                        {/* <label htmlFor="">Age</label> */}
                        <input type="text" placeholder='Enter Your age' name="age" />
                        {/* <label htmlFor="">Email</label> */}
                        <input type="email" placeholder='Enter Your Email' name="email" />
                        {/* <label htmlFor="">Password</label> */}
                        <input type="password" placeholder='Enter Your Password' name="password" />
                        <button type="submit">signup</button>
                    </form>
                    <p style={{ "textAlign": "right", "fontSize": "0.8rem", "cursor": "pointer", "color": "blue" }}>(Forgot Password)</p>
                </div>
                <Divider />
                <div>
                    <p style={{ "textAlign": "center", "fontSize": "0.8rem", "cursor": "pointer", "color": "black", "marginTop": "10px" }}>OR</p>
                    <p style={{ "textAlign": "center", "fontSize": "0.8rem", "cursor": "pointer", "color": "black", "marginTop": "2px" }}>Signin With</p>
                    <div className='icons'>
                        <FcGoogle size={20} className="child_icon" />
                        <BsGithub size={20} className="child_icon" />
                        <FaFacebookSquare size={20} className="child_icon" />
                    </div>
                    <p style={{ "textAlign": "center", "fontSize": "0.8rem", "cursor": "pointer", "color": "black", "marginTop": "20px", "width": "80%", "margin": "auto" }}>Click “Sign Up” to agree to dBlog's Terms of Service and acknowledge that dBlog’s Privacy Policy applies to you.</p>
                </div>

            </div>
        </div>
    )
}

export default Login