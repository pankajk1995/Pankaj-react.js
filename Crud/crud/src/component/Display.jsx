import React, { useEffect, useState } from 'react'
import Data from './Data'

const Display = () => {

    const [data,setdata]=useState([])

    useEffect(()=>{
        fetch("http://localhost:8085/productdata")
        .then((res)=>res.json())
        .then((data)=>setdata(data))
        .catch((err)=>console.log(err))
    },[data])
    const handledelete = (id)=>{
        alert(id)
        fetch(`http://localhost:8085/productdata/${id}`,{
            method:"DELETE"
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            alert("data deleted")
        })
        .catch((err)=>{
            console.log(err)
            alert("something went wrong")
        })
    }
  return (
    <div>
    <Data/>
    <div style={{display:'grid',gridTemplateColumns:"repeat(3,1fr)",gap:"4px"}}>
    {data.map((el)=>(
        
    <div key={el.id} style={{border:"2px solid teal"}}>
        <p>{el.id}</p>
       <img src = {el.image} style={{height:"200px", width:"200px"}}/>
       <h5> price={el.price}</h5> 
       <p> title={el.title}</p>
        <p>description={el.description}</p>
        <button onClick={()=>handledelete(el.id)}>Delete</button>
        <button>Update</button>
    </div>))}
    </div>
    </div>
  )
}

export default Display
