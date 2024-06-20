import axios from "axios";
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, POST_PRODUCT_FAILURE, POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS } from "../actionType";

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


  export const GetproductData=(paramobj)=>(dispatch)=>{
    dispatch({type:GET_PRODUCT_REQUEST,payload:false})
    
    axios.get("http://localhost:8080/product",paramobj).then((res)=>{
      console.log(res.headers["x-total-count"]);
      // put these data in store and reducer me make a key
     dispatch({type:GET_PRODUCT_REQUEST,payload:false})
     dispatch({type:GET_PRODUCT_SUCCESS,payload:{data:res.data,page:res.headers["x-total-count"]}})
     console.log(res);
    }).catch((err)=>{
     dispatch({type:GET_PRODUCT_REQUEST,payload:false})
     dispatch({type:GET_PRODUCT_FAILURE,payload:true})
     console.log(err);
    })
 }