const mongoose = require("mongoose");
// const bcrypt = require("bcrypt.js")

const userSchema = new mongoose.Schema({
firstName :{type:String,required :true},
lastName:{type:String,required:true},
age:{type:Number,required:true},
email:{type:String,required:true},
profile_img:[{type:String,required:true}]
},{
    versionKey:false,
    timestamps:true,
})
module.exports = mongoose.model("user",userSchema)