const mongoose=require("mongoose")

const connection =async ()=>{

    try{
        await mongoose.connect(process.env.Mongo_Url)
        console.log("Connected Mongodb")
    }catch(error){
        console.log("Mongodb not connected")
    }

}

module.exports = connection