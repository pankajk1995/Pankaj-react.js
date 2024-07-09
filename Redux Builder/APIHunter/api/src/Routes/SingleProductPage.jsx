import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
function SingleProductPage(){

    const {id}=useParams()

    const [data,setdata]=useState({})
    console.log(id)

    useEffect(()=>{
        axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`).then((res)=>{
            setdata(res.data.data)
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    },[data])

    return (
        <div data-testid="products-container" style={{border:"1px solid black", height:"auto", width:"50%", margin:"auto"}}>   
            <div>
                <h3 data-testid="product-brand">{data.brand}</h3>
            </div>
            <div >
            <img src={data.img} data-testid="product-image" alt="image"/>
            </div>
            <div data-testid="product-category">{data.category}
            </div>
           
            <div data-testid="product-details">{data.details}
            </div>
            <div data-testid="product-price">{data.price}
            </div>

            </div>
    )
}
export default SingleProductPage