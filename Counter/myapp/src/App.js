
import './App.css'
import React ,{useState} from 'react';
function App() {
  const [count,setcount]=useState(0)
    
  return (
    <div className='App'>
    <h1 style={{color:"tomato"}}>Counter</h1>
    <h2 style={{border:"2px solid green" ,height:"45px",width:"35px" ,margin:"auto",backgroundColor:"skyblue"}}>{count}</h2>
    <button onClick={()=>setcount(count+1)} className='btn'>Increase</button>
    <button  onClick={()=>setcount(0)} className='btn'>Reset</button>
    <button disabled={count==0} onClick={()=>setcount(count-1)} className='btn'>Descrease</button>
    </div>
  );
}

export default App;
