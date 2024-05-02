import { useState } from 'react'
let initialstate={
  name:username,
  email:email,
  password:password,
  country:country,
  ismarried:ismarried,
  check:true
}

function App() {
 const [farm,setfarm]=useState()


 const handle = ()=>
 {
  e.preventDeafault();
 }
  return (
   <div>
    <h1>Farm Validation</h1>
    <form onSubmit={handle}>
    <input type='text' name="username" placeholder='Enter Name' onChange={handle(e)}/><br/><br/>
    <input type='email' name="email" placeholder='Enter Email' onChange={handle(e)}/><br/><br/>
    <input type='password' name="password" placeholder='Enter Password' onChange={handle(e)}/><br/><br/>
    <select value=""onChange={handle(e)}>Select country
    <option>Select Country</option>
    <option value="India">India</option>
    <option value="USA">USA</option>
    <option value="UAE">UAE</option>
    <option value="Russia">Russia</option>
    </select><br/><br/>
    ismarried <input type='checkbox' onChange={handle(e)}/><br/><br/>
    <input type='submit' onChange={handle(e)}/>
    </form>
   </div>
  )
}

export default App
