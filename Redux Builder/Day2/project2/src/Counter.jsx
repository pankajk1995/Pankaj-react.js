import React from 'react'
import { store } from './Redux/store'
import {useDispatch,useSelector} from 'react-redux'
import { AddToCounter, SubToCounter } from './Redux/action'
const Counter = () => {
    // let {getState,dispatch,subscribe}=store

    const dispatch= useDispatch(0)

    let counter=useSelector((store)=>store.counter)
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={()=>{
        dispatch((AddToCounter(1)))
      }}>+</button>
      <button onClick={()=>{
        dispatch((SubToCounter(1)))
      }}>-</button>
    </div>
  )
}

export default Counter
