import React, { useState } from 'react'

let initialdata={
    title:"",
    price:0,
    image:"",
    description:""

}
const Data = () => {
    const [formdata,setformdata]=useState(initialdata)

    const handlesubmit=(e)=>{
        e.preventDefault();
        fetch("http://localhost:8080/productdata",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(formdata)
        })
        .then((res)=>
        {
            console.log(res);
            alert("data added...")
        })
        .catch((err)=>
        {
            console.log(err);
            alert("something went wrong")
        })
    }

    const handlechange=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})
        setformdata('')
    }
    const {title,price,description,image}=formdata
  return (
    <div>
      <form onSubmit={handlesubmit} style={{textAlign:"center"}}>
        <input
        type='text'
        name="image"
        value={image}
        onChange={(e)=>handlechange(e)}
        placeholder='Enter Image url'
        />
        <input
        type='text'
        name='title'
        value={title}
        onChange={(e)=>handlechange(e)}
        placeholder='Enter Title..'
        />
        <input
        type='number'
        name='price'
        value={price}
        onChange={(e)=>handlechange(e)}
        placeholder='Enter price..'
        />
         <input
        type='text'
        name='description'
        value={description}
        onChange={(e)=>handlechange(e)}
        placeholder='Enter description..'
        />
        <input type='submit' onChange={(e)=>handlechange(e)}/>
      </form>
    </div>
  )
}

export default Data
