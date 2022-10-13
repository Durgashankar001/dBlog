const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config("./.env")
const url = process.env.DB_URL

const connect =()=>{
    return mongoose.connect(url)
}
module.exports = connect