import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './component/Admin'
import Login from './Pages/Login'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Admin/>}></Route>
        <Route path='*' element={<h1>404 page Not Found</h1>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
