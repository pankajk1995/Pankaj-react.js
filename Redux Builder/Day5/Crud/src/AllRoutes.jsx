import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './component/Admin'
import Login from './Pages/Login'
import Private from './component/Private'
import Productdata from './component/Productdata'
import Homepage from './component/Homepage'
import Edit from './Pages/Edit'
import Editall from './Pages/Editall'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Homepage/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/product' element={<Productdata/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
        <Route path='/editall/:id' element={<Editall/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
