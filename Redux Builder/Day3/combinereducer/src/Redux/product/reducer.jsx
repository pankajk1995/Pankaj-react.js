import { Get_product_failure, Get_product_request, Get_product_sucess } from "./actionType"

let initialstate={
    isLoading:false,
    isError:false,
    data:[]
}

export const reducer =(state=initialstate,{type,payload})=>{
    switch(type){
        case Get_product_request:
            return {...state,isLoading:payload};
            case Get_product_sucess:
                return{...state,data:payload};
                case Get_product_failure:
                    return{...state,isError:payload}
        default:
            return state
    }
}