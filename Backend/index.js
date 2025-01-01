const express =require("express")
const app=express()
const cors=require("cors")
require("dotenv").config()
const BodyParser=require("body-parser")
const dbconnect=require("./connection")
const UserRouter=require("./Router/userrouter")
const PORT=process.env.PORT

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbconnect()
app.use("/api/user",UserRouter);




app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`)
})




