import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function PostData() {
    const formData =
    {
        image: "",
        title: "",
        price: "",
        category: ""
    }
    const [get, setGet] = useState(formData)
    const handleChnage = (e) => {
        const { name, value } = e.target
        setGet((pre) => ({ ...pre, [name]: value }))
    }

    const {
        image,
        title,
        price,
        category,
    }=get



    const handleSubmit = (e) => {
        e.preventDefault();
        if(image == "" ||title ==""||price == "" ||category == "")
            {
                alert("data is black")
            }
          else
          {
            axios.post("http://localhost:8080/data", get)
            .then(res => alert('Data posted:', res.data))
            .catch(error => console.error('Error posting data:', error))  
          }
    }
    return (
        <div>
        <Link className='linkto' to="/" >Return Home</Link>
            <form action="" onSubmit={handleSubmit}>
                <input className='post' type="text" name='image' onChange={handleChnage} value={get.image} placeholder='Enter image Url' />
                <input className='post' type="text" name='title' onChange={handleChnage} value={get.title} placeholder='Enter Title' />
                <input className='post' type="text" name='price' onChange={handleChnage} value={get.price} placeholder='Enter Price' />
                <input className='post' type="text" name='category' onChange={handleChnage} value={get.category} placeholder='Enter Category' />
                <input className='post' type="Submit" />
            </form>
        </div>
    )
}

export default PostData

