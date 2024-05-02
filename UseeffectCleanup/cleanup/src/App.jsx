import { useState } from 'react'

import './App.css'
import Timer from './Timer'

function App() {
  const [show,setshow]=useState(true)
  return (
    <div>
    <button onClick={()=>setshow(!show)}></button>
    </div>
  )
}S

export default App
