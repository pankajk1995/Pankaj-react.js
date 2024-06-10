import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from 'axios'
import { Get_product_failure, Get_product_request, Get_product_sucess } from "../Redux/product/actionType"
export const Product = ()=>{

    const {isLoading,isError,data}=useSelector((store)=>store.productreducer)
    
    const dispatch=useDispatch();

const fetchdata=()=>
    {
        dispatch({type:"Get_product_request",payload:true})
        axios.get("https://fakestoreapi.com/products").then
        ((res)=>{
            dispatch({type:Get_product_request,payload:false})
            dispatch({type:Get_product_sucess,payload:res.data})
        })
        .catch((error)=>{
            dispatch({type:Get_product_request,payload:false})
            dispatch({type:Get_product_failure,payload:true})
        })
    }

    useEffect(()=>{
        fetchdata()
    },[]) 
console.log(data);
   
    return isLoading?<h41>data Loading</h41>:isError?<h2>Something went wrong</h2>:(
        <div>
            <h1>Product Page</h1>
            <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "4px",
          borderRadius:"10px"
        }}
      >
          {data.map((el)=>(
           <div key={el.id} style={{ border: "2px solid teal" }}>
             <img src={el.image} style={{ height: "320px", width: "300px",borderRadius:'10px', marginTop:'5px' }} />
            <h3 style={{color:'magenta'}}>{el.category}</h3>
            <h2 style={{color:'mediumorchid'}}>{el.title}</h2>
           <marquee style={{width:'50%'}}> <h5 style={{color:'tomato'}}>💲:{el.price}</h5></marquee>
            <h4>{el.description}</h4>
            </div>
          ))}
          </div>
        </div>
    )
}