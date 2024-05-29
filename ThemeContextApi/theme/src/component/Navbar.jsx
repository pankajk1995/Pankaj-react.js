import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {

  const value= useContext(MainContext)

  const {isauth,login,logout}=useContext(AuthContext)
  return (
    <div style={{ height:"300px", width:"500px", margin:"auto"}}>
      <h1>Navabar</h1>
      <h3>Theme is {value.theme} </h3>
      <h2>User login {isauth ? "user login":"user logout"} </h2>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar
