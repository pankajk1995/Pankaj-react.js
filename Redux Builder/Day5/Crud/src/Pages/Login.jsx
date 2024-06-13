
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostuserData } from "../Redux/auth/action";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const [email,setemail]=useState("")

  const [password,setpassword]= useState("")

  const dispatch=useDispatch()

  const {isLoading,isErrorr,isAuth}=useSelector((store)=>store.Authreducer)

  const navigate= useNavigate()
   const handlesubmit=(e)=>{
    e.preventDefault()
    const userdata={
      email,
      password
    }
    
    dispatch(PostuserData(userdata)).then((res)=>{
      navigate('/')
    })
   }
  return isLoading ? <h1>Please wait... </h1>:isErrorr ? <h1>Email Id is Wrong..</h1> :(
    <div style={{
      height: "250px",
      width: "400px",
      border: "2px solid teal",
      textAlign: "center",
      margin: "auto",
      background:
        "linear-gradient(to right, rgba(51, 255, 215,0), rgba(51, 255, 215,1))",
    }}>
      
       {isAuth ? <h1 style={{color:'green'}}>You Are Logged In</h1>: <h1 style={{color:'red'}}>Please Login</h1>}
      <form onSubmit={handlesubmit}>
      <div  style={{ marginTop: "15px" }}>
      <input type="email" placeholder="enter email... " onChange={(e)=>setemail(e.target.value)}/> <br /> <br />
      <input type="password" placeholder="enter password..." onChange={(e)=>setpassword(e.target.value)}/> <br /> <br />
      <input type="submit" /> <br /> <br />
      </div>
      </form>
      
    </div>
  );
};

export default Login;
