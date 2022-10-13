const express = require("express")
const connect = require("./config/Connect")
const userRouter = require("./Router/user.router")
const cors = require("cors")

const server = express()
server.use(express.json())
server.use(cors())

server.get('/',async(req,res)=>{
    res.send("You are welcome to dBlog sever")
})
server.use("/user",userRouter)



server.listen(8080,async()=>{
    await connect()
    console.log("Database connected")
})
