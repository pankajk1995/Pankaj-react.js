import React from 'react'
import { store } from '../Redux/store'
import { ADD, SUB } from '../Redux/counter/actionType'
import {useDispatch,useSelector} from 'react-redux'
import { AddToCounter, SubToCounter } from '../Redux/counter/action'
export const Counter = () => {
    // let {dispatch,getstate,subscribe}=store
        const dispatch=useDispatch();

        const counter= useSelector((store)=>store.counterreducer.counter)
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={()=>{
        dispatch(AddToCounter(1))
      }}>Add</button>
      <button disabled={counter==0} onClick={()=>{
        dispatch(SubToCounter(1))
      }}>Sub</button>
    </div>
  )
}


