import React, { useState } from 'react'
import { store } from './Redux/store'

const Counter = () => {

    let reactredux= store
    console.log(reactredux);
    let [value,setvalue]=useState(0)
    const handleAdd=()=>
        {
            reactredux.dispatch({type:"ADD",payload:1}) 
            console.log(reactredux.getState().counter);
        }
    
        const handlesub=()=>
            {
                reactredux.dispatch({type:"SUB",payload:-1}) 
                console.log(reactredux.getState().counter);
            }
    
        reactredux.subscribe(()=>{
            setvalue((pre)=>pre+1)
        })    

  return (
    <div>
      <h2>counter:{reactredux.getState().counter}</h2>
      <button onClick={handleAdd}>Add</button>
      <button disabled={reactredux.getState().counter==0} onClick={handlesub}>Sub</button>
    </div>
  )
}

export default Counter


