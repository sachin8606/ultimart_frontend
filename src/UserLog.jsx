import React, { Fragment, useState } from 'react';
import Logo from './logo.png';
import axios from 'axios';
const UserLog = ()=>{

    const [email,setEmail] = useState("");
    const [password,setPass] = useState("");
    const[state,setIt] = useState("");
    const mail =(e)=>{
      setEmail(e.target.value);
    }
    const pass = (e)=>{
      setPass(e.target.value);
    }

  const submit = (e)=>{
    e.preventDefault();
    const memberObject = {
      email: email,
      password: password
    };
    axios.post('http://localhost:5000/members/sign-in', memberObject)
    .then(res =>{
      if(res.data.result!==null)
      {
        console.log(res.data);
        sessionStorage.setItem('user',res.data.result._id);
        setIt(<i class="fa fa-check" aria-hidden="true"></i>);  
        alert("Successful");
        setEmail("");
        setPass(""); 
        window.location.assign("/");
      }
      else{
        setIt(<i class="fa fa-times" aria-hidden="true"></i>);
        console.log("unsuccess");
      }
    }
      );
    setEmail("");
    setPass("");
 
 }

    return(
        <>
        <div id="mainuserLog">
          <p id="userLogState">{state}</p>
        <div id="userLoginner">
        <form onSubmit={submit} method="POST">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" value={email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={mail} required/>
    <div id="emailHelp" class="form-text" style={{color:"white"}}>We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" value={password} class="form-control" id="exampleInputPassword1" onChange={pass} required/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <a href="/sign-up">Sign-up</a>
</form>
</div>
<div id="userLogContainer">
          <img src={Logo} alt="Ultimart"/>
        </div>
</div>

        </>
    )
}
export default UserLog;