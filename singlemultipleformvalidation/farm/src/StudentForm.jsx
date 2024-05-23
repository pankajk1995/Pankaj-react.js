import React, { useState }  from "react";

let initialstate={
    username:"",
    email:"",
    password:"",
    select:"",
    gender:""
   
}

const StudentForm = () => {
    const [farmdata,setfarmdata] =useState(initialstate)

 const handlesubmit=(e)=>{
    e.preventDefault()
    console.log(farmdata);
             
 }
 const handlechange=(e)=>
    {
        const {name,value}= e.target
        setfarmdata((predata)=>({...predata,[name]:value}))
    }
  return (
    <form action="" onSubmit={handlesubmit}>
      <div
        style={{
          border: "3px solid green",
          height: "400px",
          width: "550px",
          margin: "auto",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <div className="main" style={{ marginTop: "50px" }}>
          <h1>Student Farm Sigle State</h1>
          <label>Studen name:</label>
          <input type="text" placeholder="studentfullname" name="username" value={farmdata.username} onChange={(e)=>handlechange(e)}  /> <br /> <br />
          <label>Studen Email:</label>
          <input type="email" placeholder="student email" name="email" value={farmdata.email} onChange={(e)=>handlechange(e)}  /> <br /> <br />
          <label>Enter Password:</label>
          <input type="password" placeholder="enter password" name="password" value={farmdata.password} onChange={(e)=>handlechange(e)} /> <br /> <br />
          <select name="select" value={farmdata.select} onChange={(e)=>handlechange(e)}>
          <option value="" >Select grade </option>
            <option value="Freshman" onChange={(e)=>handlechange(e)}>freshman</option>
            <option value="Sophomore" onChange={(e)=>handlechange(e)}>sophomore</option>
            <option value="Junior" onChange={(e)=>handlechange(e)}>junior</option>
            <option value="Senior"onChange={(e)=>handlechange(e)} >senior</option>
          </select>
          <br /> <br />
          <legend onChange={(e)=>handlechange(e)} name="gender" value={farmdata.gender}>Choose your gender:</legend>
          <label>Male</label>
          <input type="radio" name="gender" value="male" onChange={(e)=>handlechange(e)} />
          <label>FeMale</label>
          <input type="radio" name="gender" value="female" onChange={(e)=>handlechange(e)} />
          <labe>Male</labe>
          <input type="radio" name="gender" value="other" onChange={(e)=>handlechange(e)} />
          <br /> <br />
          <input type="submit"  ></input>
        </div>
      </div>
    </form>
  );
};

export default StudentForm;
