import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-around'}}>
      <Link to='/login'>Login</Link>
      <Link to='/'>Admin</Link>
    </div>
  )
}

export default Navbar
