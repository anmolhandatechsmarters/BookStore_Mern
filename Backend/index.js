const express =require("express")
const app=express()
const cors=require("cors")
require("dotenv").config()
const BodyParser=require("body-parser")
const dbconnect=require("./connection")


//Get All the Router
const UserRouter=require("./Router/userrouter")




//End Get router


const PORT=process.env.PORT
app.use(cors())
dbconnect()

app.use("/api/user",UserRouter);




app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`)
})




