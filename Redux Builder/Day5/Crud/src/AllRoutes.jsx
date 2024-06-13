import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './component/Admin'
import Login from './Pages/Login'
import Private from './component/Private'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        
        <Route path='/' element={<Private><Admin/></Private>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='*' element={<h1>404 page Not Found</h1>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
