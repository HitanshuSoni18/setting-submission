const mongoose = require("mongoose");

//create schema

const usermodel = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        unique:true,
        required:true,
    },
    age:{
        type:Number,
    },
});

//create  models

const user = mongoose.model('user',usermodel)
module.exports=user;