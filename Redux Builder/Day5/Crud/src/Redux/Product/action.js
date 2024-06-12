import axios from "axios";
import { POST_PRODUCT_FAILURE, POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS } from "../actionType";

export const postdatafun=(data)=>(dispatch)=>{
    dispatch({type:POST_PRODUCT_REQUEST, payload:true})
    
    axios.post(" http://localhost:8080/product",data).then((res)=>
    {
      dispatch({type:POST_PRODUCT_REQUEST,payload:false})
      dispatch({type:POST_PRODUCT_SUCCESS,payload:res.data})
      console.log(res);
    }).catch((err)=>{
      dispatch({type:POST_PRODUCT_REQUEST,payload:false})
      dispatch({type:POST_PRODUCT_FAILURE,payload:true})
      console.log(err)})
  }