const express =require("express")
const app=express()
const cors=require("cors")
const BodyParser=require("body-parser")
const dbconnect=require("./connection")
require("dotenv").config()
const PORT=process.env.PORT
app.use(cors())
dbconnect()





app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`)
})




