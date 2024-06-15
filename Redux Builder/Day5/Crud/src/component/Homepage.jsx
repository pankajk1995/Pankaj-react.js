import React from 'react'

import Productdata from './Productdata'
import Sidebar from './Sidebar'

const Homepage = () => {
  return (
    <div>
        <div style={{display:'flex',marginTop:"15px"}}>
        <div style={{width:"20%"}}>
        <Sidebar/>  
        </div>
        <div style={{width:"80%"}}>
      <Productdata/>
      </div>
      </div>
    </div>
  )
}

export default Homepage
