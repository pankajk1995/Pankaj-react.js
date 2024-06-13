import { AUTH_PRODUCT_FAILURE, AUTH_PRODUCT_REQUEST, AUTH_PRODUCT_SUCCESS } from "../actionType"

let initialstate={
isLoading:false,
isError:false,
isAuth:false,
token:""
}

export const reducer =(state=initialstate,{type,payload})=>{
    switch(type){
        case AUTH_PRODUCT_REQUEST:
            return{...state,isLoading:payload}
            case AUTH_PRODUCT_SUCCESS:
                return{...state,token:payload,isAuth:true}
                case AUTH_PRODUCT_FAILURE:
                    return{...state,isError:payload}
                
        default:
            return state
    }
}