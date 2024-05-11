import { useState } from 'react'

import MainPage from './component/MainPage'

function App() {

const [name,setname]=useState("pankaj")
  return (
    <>
    <h1>App</h1>
    <MainPage username={name}/>
    </>
  )
}

export default App
