import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchdata } from "../Redux/product/action"

 
export const Product = ()=>{

    const {isLoading,isError,data}=useSelector((store)=>store.productreducer)
    const dispatch=useDispatch()
    useEffect(()=>{
        // fetchdata(dispatch)
        dispatch(fetchdata)
    },[]) 

   
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