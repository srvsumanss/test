const mongoose = require("mongoose");

module.exports = ()=>{
    mongoose.connect("mongodb+srv://saurav:saurav@cluster0.1vtuh.mongodb.net/facebook?retryWrites=true&w=majority")
}