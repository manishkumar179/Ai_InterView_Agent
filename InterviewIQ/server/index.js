import dotenv from 'dotenv'
dotenv.config()
import { configDotenv } from "dotenv"
import express  from "express"
import connectDb from './config/connectDb.js'
let app = express()

let PORT = process.env.PORT || 6000

app.get("/" , (req,res)=>{
    return res.json({
        message:"Server started"
    })
})


app.listen(PORT,()=>{
    console.log("Server is running on port 8000")
    connectDb()
})