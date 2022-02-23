const express = require("express")
const mongoose = require("mongoose")
const connect = require("./config/db")
    

const app = express()
app.use(express.json())

app.listen(1122,async function(){
    try{
        await connect();
        console.log("listen on 1122")
    }catch(err){
        console.log(err.message)
    }
})