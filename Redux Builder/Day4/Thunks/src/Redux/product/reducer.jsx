import { Get_Product_Failure, Get_Product_Request, Get_Product_Success } from "../actionType"

let initialstate={
    isLoading:false,
    isError:false,
    data:[]
}

export const reducer =(state=initialstate,{type,payload})=>{
switch(type){
    case Get_Product_Request:
        return{...state,isLoading:payload};
    case Get_Product_Success:
        return{...state,data:payload};
        case Get_Product_Failure:
            return{...state,isError:payload}
    default:
        return state
}
}