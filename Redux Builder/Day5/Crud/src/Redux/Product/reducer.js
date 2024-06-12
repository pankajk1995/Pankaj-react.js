import { POST_PRODUCT_FAILURE, POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS } from "../actionType"

let initialstate={
    isLoading:false,
    isError:false,
    data:[]
}
export const reducer =(state=initialstate,{type,payload})=>{
    switch(type){
        case POST_PRODUCT_REQUEST:
            {
                return{...state,isLoading:payload}
            }
            case POST_PRODUCT_SUCCESS:
                {
                    return{...state,data:payload}
                }
                case POST_PRODUCT_FAILURE:
                    {
                        return{...state,isError:payload}
                    }
        default:
            return state
    }
}