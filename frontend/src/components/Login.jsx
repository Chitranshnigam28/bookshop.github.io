import React from 'react';
import "./Login.css";
import { useState } from 'react';
import axios from "axios";

const Login = () => {


  const [user,setUser]=useState({
        email:"",
        password:"",
        });
    
      const changeHandler=(e)=>{
          const {name,value}=e.target;
          setUser({
            ...user,
            [name]:value
          })
      }
      const login= async ()=>{
        const {email,password}=user;
        const res=await axios.post("http://localhost:8000/login",user).then((res)=>{alert(res.data.message)})//alert("Message"+res.data.message)
        console.log("axios res"+res);
      }
  return (<> 
        {console.log(user)}
  
     <div className='container mt-5'>
                    <div className='jumbotron'>
                            <h2 className='loginheading'>Login Page</h2>
                <form className='logincontainer'>
                <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" name="email" value={user.email} onChange={changeHandler} aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={user.password} onChange={changeHandler} placeholder="Password"/>
                </div>
                
                <button type="submit" onClick={login} class="btn btn-primary btn-lg btn-block mt-5">Submit</button>
                </form>
                </div>
                </div>
        </>);
};

export default Login;
