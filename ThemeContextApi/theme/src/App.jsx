import React, { useContext } from 'react'
import Navbar from './component/Navbar'
import Midcontent from './component/Midcontent'
import { MainContext } from './context/MainContext'
import './App.css'

const App = () => {
  const {theme,ToggleTheme}=useContext(MainContext)
  console.log(theme);
  return (
    <div style={{backgroundColor:theme=='light'?"white":"black", color:theme=="light"?"black":"white"}}>
    <div>
      <Navbar/>
      <Midcontent/>
    </div>
    <button onClick={ToggleTheme}>Change Theme</button>
    </div>
    
  )
}

export default App
