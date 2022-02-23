const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    body :{type:String,required:true},
    like: {type:Number,required:true},
    images :{type:String,required:true}
},{
    versionKey :false,
    timestamps:true ,
})

const Post = mongoose.model("post",postSchema)

module.exports = Post ;