import { useState } from 'react'


import Navbars from './component/Navbars';
import Slide from './component/Slide';
import './App.css'
import Allroutes from './Allroutes';
function App() {
  return (
    <>
    <Allroutes/>
     <Navbars/>
     <Slide/>
    </>
  )
}
export default App
