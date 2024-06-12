import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HandleToadd, HandleTosub } from '../Redux/counter/action'

const Counter = () => {
const dispatch =useDispatch()

const counter= useSelector((store)=>store.counterreducer.counter)

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={()=>{
        dispatch(HandleToadd(1))
      }}>Add</button>
      <button disabled={counter===0} onClick={()=>{
        dispatch(HandleTosub(1))
      }}>Sub</button>
    </div>
  )
}

export default Counter
