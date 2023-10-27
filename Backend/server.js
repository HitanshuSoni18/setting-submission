const express= require("express");

const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const User = require("./models/usermodel");

app.use(express.json());
mongoose
.connect(process.env.URI)
.then(()=>{
    console.log("connected successfully");
    app.listen(process.env.PORT || 8000,(err)=>{
        if(err) console.log(err);
        console.log("running successfully at",process.env.PORT);
    });
})

.catch((error)=>{
  console.log("error", error);
});

app.post("/", async(req,res)=>{
    const {name,email,age}=req.body;
    const User = require("./models/usermodel");

    try{
        const userAdded = await User.create({
            name: name,
            email:email,
            age:age,
        });

        res.sendStatus(201).json(userAdded);
    
    }catch(error){
        console.log(error);
        res.send(400).json({error:error.messege})
    }
   
   

});


app.get("/",(req,res)=>{
    res.send("api running hey ");
})

