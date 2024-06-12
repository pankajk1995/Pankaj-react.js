import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { POST_PRODUCT_FAILURE, POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS } from "../Redux/actionType";
import { postdatafun } from "../Redux/Product/action";
const initialstate={
  title:"",
  price:"",
  description:"",
  image:"",
  category:''
}

const Admin = () => {
  const [data,setdate]=useState(initialstate)

  const {title,price,description,image,category} =data

  const dispatch=useDispatch()

  const postdata=useSelector((store)=>store.ProductReducer.data)

  

  const handlechange=(e)=>{
    setdate({...data,[e.target.name]:e.target.value})
  }
 

  

  const handlesubmit=(e)=>{
    e.preventDefault()
   dispatch(postdatafun(data))
  }
  return (
    <div>
      <h1>Admin</h1>
      <form onSubmit={handlesubmit}>
        <input type="text" onChange={(e)=>handlechange(e)} name="title" value={title} placeholder="enter title"/> <br /> <br />
        <input type="text"  onChange={(e)=>handlechange(e)} name='price' value={price}  placeholder="enter price"/> <br /> <br />
        <input type="text"  onChange={(e)=>handlechange(e)} name="description" value={description}  placeholder="enter desc.."/><br /> <br />
        <input type="text"  onChange={(e)=>handlechange(e)} name="image" value={image} placeholder="enter image url"/><br /> <br />
        <select>
          <option name="category"  onChange={(e)=>handlechange(e)} value={category}>select your category</option>
          <option value="men's clothing">Mens</option>
          <option value="women's clothing">Womens</option>
          <option value="jewelery">jewellary</option>
          <option value="electronics">electronics</option>
        </select> <br /> <br />
        <input type="submit" /><br />
      </form>
    </div>
  );
};

export default Admin;
