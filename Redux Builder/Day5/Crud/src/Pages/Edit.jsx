import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  const [price,setprice]=useState(0)
  const {id}=useParams()
  const navigate= useNavigate()
  useEffect(()=>{
    axios.get(`http://localhost:8080/product/${id}`).then((res)=>{
      
      setprice((res.data.price))})
    .catch((err)=>console.log(err))
  },[])

  const handleupdate=(id)=>{
    axios.patch(`http://localhost:8080/product/${id}`,{
      price
    }).then((res)=>{
      alert("price updated")
      console.log(res)
      navigate("/")
    })
    .catch((err)=>{
      alert("something went wrong")
      console.log(err)
    })

  }
  return (
    <div>
      <h2>Edit Data</h2>
      <input type="text" value={price} placeholder='enter new price' onChange={(e)=>setprice(e.target.value)}/>
      <button onClick={()=>handleupdate(id)}>update price</button>
    </div>
  )
}

export default Edit
