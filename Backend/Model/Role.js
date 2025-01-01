const mongoose =require("mongoose");
const autoIncrement = require("mongoose-sequence")(mongoose)
const RoleSchema=new mongoose.Schema({
    id:{
        type:Number,
    },
    role_name:{
        type:String
    }
})

RoleSchema.plugin(autoIncrement,{inc_field:"id"})

const RoleModel=mongoose.model("role",RoleSchema);

module.exports =RoleModel