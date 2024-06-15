import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-around'}}>
      <Link to='/'></Link>
      <Link to='/admin'>Admin</Link>
      <Link to='/product'>Product</Link>
      <Link to='/login'>Login</Link>
      
    </div>
  )
}

export default Navbar
