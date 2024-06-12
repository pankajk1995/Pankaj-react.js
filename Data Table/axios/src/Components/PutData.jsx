import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function PutData() {
const[image,setImage]=useState("")
const[title,setTitle]=useState("")
const[price,setPrice]=useState("")
const[category,setCategory]=useState("")
const {id}=useParams()
useEffect(()=>{
  axios.get(`http://localhost:8080/data/${id}`)
  .then((res)=>{
    const data = res.data; 
        setImage(data.image);
        setTitle(data.title);
        setPrice(data.price);
        setCategory(data.category);
  })
  .catch(err => console.log(err));


},[])

 const handleSubmit =(e)=>{
  e.preventDefault();
  const updateData={
    image,
    title,
    price,
    category
  }

  axios.put(`http://localhost:8080/data/${id}`, updateData)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
 }

    
 return (

    <div>
       <form action="" onSubmit={handleSubmit}>
                <input  type="text"  onChange={(e)=>setImage(e.target.value)} value={image} placeholder='Enter image Url' />
                <input  type="text"  onChange={(e)=>setTitle(e.target.value)} value={title} placeholder='Enter Title' />
                <input  type="text"  onChange={(e)=>setPrice(e.target.value)} value={price} placeholder='Enter Price' />
                <input  type="text"  onChange={(e)=>setCategory(e.target.value)} value={category} placeholder='Enter Category' />
                <input  type="Submit" />    
                </form>
    </div>
  )
}

export default PutData
