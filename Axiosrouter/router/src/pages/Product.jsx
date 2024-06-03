import React, { useEffect, useState } from 'react'

import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { Link } from 'react-router-dom';


const Product = () => {
  const [productdata,setproductdata]=useState([])
  

 
  axios.get("https://fakestoreapi.com/products")
 .then((response) => setproductdata(response.data))
 .catch((error) => console.log(error));
  return (
    <div>
      <h2 className='text-bg-primary m-5'>This is Product Page</h2>
    <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)',gap:'5px'}}>
    {productdata.map((el)=>(
      <Link to={`/description/${el.id}`} key={el.id}>
    <Card style={{ width: '30rem' }}>
   <Card.Img variant="top" src={el.image} />
   <Card.Body>
     <Card.Title>{el.title}</Card.Title>
     <Card.Text>
      {el.price}
     </Card.Text>
   </Card.Body>
 </Card>
 </Link>
 ))}
    </div>
    </div>
  )
}

export default Product
