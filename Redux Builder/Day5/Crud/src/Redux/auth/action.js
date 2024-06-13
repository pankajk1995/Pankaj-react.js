import axios from "axios"
import { AUTH_PRODUCT_FAILURE, AUTH_PRODUCT_REQUEST, AUTH_PRODUCT_SUCCESS } from "../actionType"

export const PostuserData=(userdata)=>(dispatch)=>{
    dispatch({type:AUTH_PRODUCT_REQUEST,payload:true})
   return axios.post("https://reqres.in/api/login",userdata).then((res)=>{
      dispatch({type:AUTH_PRODUCT_REQUEST,payload:false})
      dispatch({type:AUTH_PRODUCT_SUCCESS,payload:res.data.token})
      console.log(res.data.token)})
    .catch((err)=>{
      dispatch({type:AUTH_PRODUCT_REQUEST,payload:false})
      dispatch({type:AUTH_PRODUCT_FAILURE,payload:true})
      console.log(err)})
  }