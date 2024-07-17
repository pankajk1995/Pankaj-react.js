import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Catalogue from './component/Catalogue'
import Product from './component/Product'
import WatchDetail from './component/WatchDetail'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/catalogue" element={<Catalogue/>}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path="/watch/:id" element={<WatchDetail />} />
      </Routes>
    </div>
  )
}

export default Allroutes
