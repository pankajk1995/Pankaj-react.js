import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../services/firebase'

const Dashboard = () => {


    const [data,setdata]=useState([])
    const [user]= useAuthState(auth)
 const  fetchdata=()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
        setdata(res.data)
    }).catch((err)=>{
        console.log((err))
    })
 }

    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div>
        {/* how t show email profile */}
        <img src={user?.photoURL}/>
      <h1>Product</h1>
      {
        data.map((el)=>(<div key={el.id}>
            <img src={el.image}alt="" height={200} width={200}/>
            <p>{el.price}</p>
        </div>))
      }
    </div>
  )
}

export default Dashboard
