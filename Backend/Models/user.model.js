const mongoose = require("mongoose")
const express = require("express")

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    age:{type:String,required:true},
    role:{
        type:String,
        default:"viewer",
        enum:["admin","author","viewer"]
    },
    varified: {type:Boolean,default:false}
})

const userModel = mongoose.model("user",userSchema)

module.exports = userModel