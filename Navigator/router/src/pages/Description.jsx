import React, { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

// const data= {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   category: "men's clothing",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   rating: {
//     rate: 3.9,
//     count: 120
//   }
// }
export const Description = () => {


    const [productdata,setproductdata]=useState({})
  const [load,setload]=useState(false)

  const {id}=useParams()

  useEffect(()=>{
    setload(true)
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
      setload(false)
      setproductdata(data)
    })
    .catch((err)=>console.log(err))
  },[])
  return (
    <div>
      <h1>Description</h1>
      <div style={{display:'flex',justifyContent:'center'}}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productdata.image}/>
      <Card.Body>
        <Card.Title>{productdata.title}</Card.Title>
        <Card.Text>
         {productdata.description}
        </Card.Text>
        <Card.Text>
         {productdata.category}
        </Card.Text>
        <Card.Text>
         {productdata.price}
        </Card.Text>
        <Card.Text>
         {productdata?.rating?.rate}
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>
  )
}


