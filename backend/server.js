import 'dotenv/config'
import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import Register from "./register.js";


const app=express();
const port=process.env.PORT||8000;

const connection_url=process.env.MONGODB_CONNECTION_URL;


mongoose.connect(connection_url,{
    useNewUrlParser:true,
    
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection sucessfull");
}).catch((e)=>{
    console.log("Connection Failed "+e);
});

app.use(express.json());
app.use(Cors());

app.get("/",(req,res)=>{
    res.status(200).send("I am backend");
})

app.get('/register',(req,res)=>{
    Register.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data);
        }
    })
})
app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    Register.findOne({email:email},(err,user)=>{
        if(user){
            if(password===user.password){
                console.log("Login Successfull"+user);
              // res.send({message:"Login Successfull",user:user});
               res.send({message:"Login Successfull"});
            }else{
                console.log("Invalid Password");
              res.send({message:"Invalid Password"});
            }
        }else{
            console.log("user not found");
            res.send({message:"user not found"});
        }
    })
  //  res.status(200).send("Login");
})
app.post("/register",(req,res)=>{
    const reg=req.body;
    console.log(reg);
    console.log(reg.email+" :=)"+reg.password);
    Register.findOne({email:reg.email},(err,email)=>{
        if(email){
            console.log("User already exists");
            res.status(200).send({message:"User already exists"});
        }else{
            Register.create(reg,(err,data)=>{
                if(err){
                    res.status(500).send(err)
                }else{
                    res.status(201).send({message:"User Registered Successfully"});
                }
            })
        }
    })
   
});


app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})