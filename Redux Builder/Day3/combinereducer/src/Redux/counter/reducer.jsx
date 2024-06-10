import { ADD, SUB } from "./actionType"

let initialstate={
    counter:0
}

export const reducer =(state=initialstate,{type,payload})=>
    {
        switch(type){
            case ADD:
                return {counter:state.counter+payload}
                case SUB:
                    return{counter:state.counter-payload}
            default:
                return state
        }
    }