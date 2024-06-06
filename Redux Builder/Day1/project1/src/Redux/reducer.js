export const reducer=(state,action)=>{
switch(action.type){
    case "ADD":
    return {counter:state.counter+action.payload}
    case "SUB":
        return {counter:state.counter+action.payload}
    default:
        return state
}
}