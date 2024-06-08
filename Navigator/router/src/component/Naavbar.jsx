import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

let links=[

    {
        path:"/",
        title:"Home"
        },

    {
    path:"/about",
    title:"About"
    },

    {
        path:"/contact",
        title:"Contact"
    },
    {
        path:"/product",
        title:"Product"
    }
]


const Naavbar = () => {
  return (
    <div style={{display:'flex', justifyContent:'space-around'}}>
    {links.map((el)=>
    (<NavLink style={({isActive})=>
        {
        return  isActive ? {color:"green",textDecoration:'none'}:{color:'red',textDecoration:'none'}
    }}
    key={el.path} to={el.path}>{el.title}</NavLink>))}
    <Link to="/login"> <Button variant="primary">Login</Button></Link>
    </div>
  )
}

export default Naavbar
