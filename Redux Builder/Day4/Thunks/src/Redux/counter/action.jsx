import { ADD, SUB } from "../actionType"

export const HandleToadd=(val)=>
    {
        return{type:ADD,payload:val}
    }

    export const HandleTosub=(val)=>{
        return{type:SUB,payload:val}
    }