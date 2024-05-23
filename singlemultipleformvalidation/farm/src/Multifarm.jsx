import React, { useState } from 'react'


const Multifarm = () => {

    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [pass,setpass]=useState("")
    const [country,setcountry]=useState("")
    const [check,setcheck]=useState(false)
    const  handle=(e)=>
    {
        e.preventDefault();
    let userData={
      name:name,
      email:email,
      password:pass,
      country:country,
      check:check
    }
    console.log(userData);
    }
    
    
  return (
    <div>
      <form action="" onSubmit={handle}>
        <div   style={{
          border: "3px solid green",
          height: "400px",
          width: "550px",
          margin: "auto",
          textAlign: "center",
          marginTop: "50px",
        }}>
      <h1>Form validation Multiple State</h1>
      <input type='text' placeholder='Enter Name.....' onChange={(e)=>setname(e.target.value)}></input><br></br><br></br>
      <input type='email' placeholder='Enter Email.....' onChange={(e)=>setemail(e.target.value)}></input><br></br><br></br>
      <input type='password' placeholder='Enter Password.....'onChange={(e)=>setpass(e.target.value)}></input><br></br><br></br>
      <select name="" onChange={(e)=>setcountry(e.target.value)}>Select City
      <option>Select Country</option>
      <option value="India">India</option>
      <option value="USA">USA</option>
      <option value="USA">Russia</option>
      </select><br></br><br></br>
      ismarried <input type='checkbox' onChange={(e)=>setcheck(e.target.checked)}></input><br></br><br></br>
      <input type='submit'></input>
      </div>
      </form>
    </div>
  )
}

export default Multifarm