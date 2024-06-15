import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from '../Redux/actionType'

const Productdata = () => {
    const dispatch=useDispatch()
    const {isLoading,isError,data}=useSelector((store)=>store.ProductReducer)

    const GetproductData=()=>{
       dispatch({type:GET_PRODUCT_REQUEST,payload:false})

       axios.get(" http://localhost:8080/product").then((res)=>{
        dispatch({type:GET_PRODUCT_REQUEST,payload:false})
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
        console.log(res);
       }).catch((err)=>{
        dispatch({type:GET_PRODUCT_REQUEST,payload:false})
        dispatch({type:GET_PRODUCT_FAILURE,payload:true})
        console.log(err);
       })
    }

    useEffect(()=>{
        GetproductData()
    },[])
  return isLoading ? <h1>Loading..</h1>:isError?<h1>Some thing went wrong</h1>:(
    <div>
        
    <div style={{display:'grid',gridTemplateColumns:"repeat(3,1fr)",gap:'15px'}}>
      {data.length>0 && data.map((el)=>(<div key={el.id} style={{border:"2px solid green" }}>
        <div style={{textAlign:'center' ,boxshadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"}}>
        {<img src={el.image} alt="" height={200} width={200}/>}
        <p>{el.price}</p>
        </div>
      </div>))}
    </div>
    </div>
  )
}

export default Productdata
