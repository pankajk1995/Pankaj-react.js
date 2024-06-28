import React from 'react'
import { store } from './Redux/store'
import {useDispatch,useSelector} from 'react-redux'
import { AddToCounter, SubToCounter } from './Redux/counter/action'

const Counter = () => {
    // let {getState,dispatch,subscribe}=store

    const dispatch= useDispatch(0)

    let counter=useSelector((store)=>store.counter)
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-evenly",height:"40px",width:"auto",borderRadius:"3px"}}>
    <button>Switch To Light</button>
    <button>Switch To Dark</button>
    </div>
    <div style={{height:"400px",width:"790px",border:"3px solid black",textAlign:"center",margin:"auto",marginTop:"20px"}}>
      
      <h1>Counter<br></br>
        {counter}</h1>
      <div style={{display:"flex",justifyContent:"space-around",height:"40px",width:"auto",borderRadius:"3px"}}>
      <button onClick={()=>{
        dispatch((AddToCounter(1)))
      }}>ADD</button>
      <button disabled={counter==0}onClick={()=>{
        dispatch((SubToCounter(1)))
      }}>REDUCE</button>
      </div>
    </div>
    </div>
  )
}

export default Counter
