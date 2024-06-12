import axios from "axios"
import { Get_Product_Failure, Get_Product_Request, Get_Product_Success } from "../actionType"


export const fetchdata=(dispatch)=>
    {
        dispatch({type:Get_Product_Request,payload:true})
        axios.get("https://fakestoreapi.com/products").then
        ((res)=>{
            dispatch({type:Get_Product_Request,payload:false})
            dispatch({type:Get_Product_Success,payload:res.data})
        })
        .catch((error)=>{
            dispatch({type:Get_Product_Request,payload:false})
            dispatch({type:Get_Product_Failure,payload:true})
        })
    }