import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import PostData from './Components/PostData'
import PutData from './Components/PutData'
function AllRouter() {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Post" element={<PostData/>} ></Route>
        <Route path="/put/:id" element={<PutData/>} ></Route>
      </Routes>
    </div>
  )
}

export default AllRouter
