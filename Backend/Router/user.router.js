const express = require("express")
const userRouter = express.Router()
const User = require("../Models/user.model")
const jwt  = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config("./.env")
const key = process.env.SECRET_KEY

userRouter.post("/signup",async(req,res)=>{
    const {email} = req.body
    try{
        const existing_user = await User.findOne({email})
        if(existing_user){
            return res.status(403).send({message:"User is already exist in the server"})
        }
        const create_newUser = await User.create(req.body)
        return res.status(200).send({message:"user created successfully"})
    }catch(e){
        return res.status(500).send({message:e.message})
    }   
})

userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body
    try{
        const user = await User.findOne({email:email,password:password})
        if(user){
          const token = jwt.sign(
                {id:user._id,email:user.email,role:user.role},key,
                {
                    expiresIn:"2 hour"
                }
            )
            res.status(200).send({message:"login successfull",token})
        }
        return res.status(401).send({message:"No account registered with this creadentials"})
    }catch(e){
        return res.status(500).send({message:"Something went worng please try after sometimes",e})
    }
})

module.exports = userRouter