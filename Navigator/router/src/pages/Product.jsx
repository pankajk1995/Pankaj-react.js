import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner'
import { Link } from 'react-router-dom';


const Product = () => {
  const [productdata,setproductdata]=useState([])
  const [load,setload]=useState(false)

  useEffect(()=>{
    setload(true)
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>{
      setload(false)
      setproductdata(data)
    })
    .catch((err)=>console.log(err))
  },[])
  return load ?   <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>: (
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
