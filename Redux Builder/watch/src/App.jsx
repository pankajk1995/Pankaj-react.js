import { useState } from 'react'
import { Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './component/Navbars';
import Slide from './component/Slide';
import './App.css'
function App() {
  return (
    <>
     <Navbars/>
     <Slide/>
    </>
  )
}
export default App
