import { ADD, SUB } from "./actionType";

export function AddToCounter(value){
    return{type:ADD,payload:value}
}

export function SubToCounter(value){
    return{type:SUB,payload:value}
}