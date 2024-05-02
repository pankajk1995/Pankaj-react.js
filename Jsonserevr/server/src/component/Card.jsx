import React from 'react'

const Card = ({id,title,price,description,category,image}) => {
  return (
    <div style={{border:"2px solid teal"}}>
      <img src={image} style={{height:"200px",width:"200px" }}/>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{category}</p>
      <p>{price}</p>
      <h3>{id}</h3>
    </div>
  )
}

export default Card
