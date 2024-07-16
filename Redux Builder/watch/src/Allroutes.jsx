import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Catalogue from './component/Catalogue'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/catalogue" exact component={Catalogue}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
