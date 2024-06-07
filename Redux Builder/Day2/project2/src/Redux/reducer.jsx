import { ADD, SUB } from "./ActionType"

export const reducer=(state,{type,payload})=>{
switch(type){
    case ADD:
        return {counter:state.counter+payload}
        case SUB:
            return{counter:state.counter-payload}

    default:
        return state
}
}