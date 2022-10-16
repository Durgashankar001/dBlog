const express = require("express")
const userRouter = express.Router()
const User = require("../Models/user.model")
const jwt  = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config("./.env")
const token_key = process.env.SECRET_KEY
const token_valid = process.env.TOKEN_VALID_TIME
const refresh_valid_time = process.env.REFRESH_TOKEN_VALID_TIME
const refresh_token_key = process.env.REFRESH_TOKEN_KEY

userRouter.post("/signup",async(req,res)=>{
    const {email} = req.body.data
    try{
        const existing_user = await User.findOne({email})
        if(existing_user){
            return res.status(403).send({message:"User is already exist in the server"})
        }
        const create_newUser = await User.create(req.body.data)
        return res.status(200).send({message:"Account created successfully",user:create_newUser})
    }catch(e){
        return res.status(500).send({message:e.message})
    }   
})

userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body.data
    try{
        const user = await User.findOne({email,password})
        if(user){
          const token = jwt.sign(
                {id:user._id,email:user.email,role:user.role},token_key,
                {
                    expiresIn:token_valid
                }
            )
            const refresh_token = jwt.sign(
                {
                    id:user._id,email:user.email,role:user.role
                },refresh_token_key,
                {
                    expiresIn:refresh_valid_time
                }
            )
            const response = {
                message:"login successfull",
                userDetails:{
                    name:user.name,
                    age:user.age,
                    role:user.role
                },
                token:token,
                refresh_token:refresh_token
            }
           return res.status(200).send(response)
        }
       
        return res.status(401).send({message:"No account registered with this creadentials"})
    }catch(e){
        return res.status(500).send({message:"Something went worng please try after sometimes",e})
    }
})

userRouter.post("/refresh",async(req,res)=>{
    const refresh_token = req.headers["x-authorization"]
    try{
        const user = jwt.verify(refresh_token,refresh_token_key)

        const token = jwt.sign({
            id:user.Id,email:user.email,role:user.role
        },token_key,{
            expiresIn:token_valid
        })
        const response = {
            message:"login successfull",
            token:token,
            refresh_token:refresh_token
        }
       return res.status(200).send(response)

    }catch(e){
        return res.status(500).send({message:"Something went worng please try after sometimes",e})
    }
})

userRouter.get("/github/callback",async(req,res)=>{
    res.send(req.query.code)
})

module.exports = userRouter