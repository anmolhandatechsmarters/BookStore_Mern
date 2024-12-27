
const { response } = require('express')
const User=require('../Model/User')


const GetUserData=async(req,res)=>{
    try{
        const response=await User.find()
        res.status(200).json({
            response:response,
            message:"User Successfully Found"
        })
    }catch(error){
        res.status(500).json({
            response:error,
            message:"Internal Server Error"
        })
    }
}

const InsertData=async(req,res)=>{
    const {first_name,last_name,email,password}=req.body
    try{
        const user= await User.create({first_name,last_name,email,password})
        user.save()

        res.status(200).json({
            response:user,
            message:"Successfully Added User"
                })
    }catch(error){
            res.status(500).json({
                response:error,
                message:"Internal Server Error"
            })
    }
}


const UpdateUserId=async (req,res)=>{
    const id =req.params.id
    const {first_name,last_name,email,password}=req.body
    try{    
        const updateUser=await User.updateOne({where:{Userid:id}},{
            first_name,
            last_name,
            email,
            password,
        })

        res.status(200).json({
            message:"Successfully updated User",
            response:updateUser
        })
    }catch(error){
        res.status(500).json({
            message:"Internal Server Error",
            response:error
        })
    }
}


const DeleteUser=async(req,res)=>{
    const {id} =req.params
    try{
        const response=await User.deleteOne({where:{Userid:id}})
        res.status(200).json({
            message:"Succesfully delete User",
            response
        })
    }catch(error){
        res.status(500).json({
            message:"Internal Server Error",
            response:error
        })
    }
}


module.exports ={GetUserData,InsertData,UpdateUserId,DeleteUser}