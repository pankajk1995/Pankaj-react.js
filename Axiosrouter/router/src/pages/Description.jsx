import React, { useState } from 'react'

import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';


export const Description = () => {


    const [productdata,setproductdata]=useState({})
  

  const {id}=useParams()


  axios.get(`https://fakestoreapi.com/products/${id}`)
  .then((response) => setproductdata(response.data))
  .catch((error) => console.log(error));
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


