import React from 'react';
import { useState } from 'react';
import "./Register.css";
import axios from "axios";

const Register = () => {

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
  const register=()=>{
    const {email,password}=user;
   
    if(user.email && user.password){
        axios.post("http://localhost:8000/register",user)
        .then(res=>alert("Message"+res.data.message))
      }
  }
  return (<>
  {console.log(user)}
            <div className='container-fluid mt-5'>
                    <div className='jumbotron register'>
                        <h2 className='registerheading'>Sign Up Page</h2>
                                                <form className='form'>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input name='email' value={user.email} onChange={changeHandler} type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input  type="text" name="password" value={user.password} onChange={changeHandler} class="form-control" id="inputPassword3" placeholder="Password"/>
    </div>
  </div>
  
  <div class="form-group signupbtn row">
    <div class="col-sm-12">
      <button type="submit" onClick={register} class="btn btn-primary btn-block">Sign Up</button>
    </div>
  </div>
</form>
 </div> 
 </div>
  </>);
};

export default Register;
