import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import Navbar from './component/Navbar'
import Privateroutes from './component/Privateroutes'
import Post from './component/Post'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        {/* <Route path='/' element={<Navbar />}></Route> */}
        <Route path='/dashboard' element={
           <Privateroutes>
            <Dashboard />
            </Privateroutes>
           }></Route>
            <Route path='/post' element={<Post />}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
