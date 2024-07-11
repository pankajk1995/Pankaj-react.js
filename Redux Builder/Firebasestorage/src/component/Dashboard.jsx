import { collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../services/firebase'

let initialstate = {
  image: "",
  price: "",
  description: "",
  category: "",
  title: "",
};
const Dashboard = () => {
  const [product,setproduct]=useState([]);

  const [formdata, setformdata] = useState(initialstate);

  const { image, price, description, category, title } = formdata;

  const [id,setid]=useState(0)

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };
  const handlesubmit = async(e) => {
    e.preventDefault();
    // console.log(id)
    try {
   await updateDoc(doc(db,"products",id),formdata)
   getdatafirebasestore()
    //  if(res){
    //   alert("data updated")
    //  }
    } catch (error) {
      console.log(error)
    }
    
  };
  const getdatafirebasestore=()=>{
    getDocs(collection(db,"products"))
    .then((res)=>{
     let filterdata= res.docs.map((el)=>({...el.data(),id:el.id}))
      setproduct(filterdata)
    }).catch((err)=>{
      console.log(err)
    })
  }

  const handledelete=async(id)=>{
    try {
    await deleteDoc(doc(db,"products",id))
    getdatafirebasestore()
    } catch (error) {
      console.log(error)
    }
  };

  const handlegetsingledata=async(id)=>{
    setid(id)

    try {
    let res=  await getDoc(doc(db,"products",id))
    let filterdata=res.data()
    setformdata(filterdata)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getdatafirebasestore()
  },[product])

 
  return (
    <div>
      <h1 style={{color:"darkorange"}}>Dashboard</h1>
      <hr />
      <h3 style={{color:"yellow", }}>Update Form Here</h3>
      <div style={{height:"auto", width:"100%", margin:"auto", border:"3px solid green"}}>
      <form action="" onSubmit={handlesubmit}>
        <div style={{marginTop:"10px"}}>
          {/* <h5 style={{color:"green"}}>Fill All required fields</h5> */}
       Image <input
          type="text"
          onChange={(e) => handlechange(e)}
          value={image}
          name="image"
          placeholder="image" 
        />
        <br />
        <br />
      Title  <input
          type="text"
          onChange={(e) => handlechange(e)}
          value={title}
          name="title"
          placeholder="title" 
        />
        <br />
        <br />
        <select
          onChange={(e) => handlechange(e)}
          value={category}
          name="category"
        >
          <br />
          <br />
          <br />
          <br />
          <option value={""}>Select Your category</option>
          <br />
          <br />
          <option value={"men's clothing"}>men's clothing</option>
          <option value={"women's clothing"}>women's clothing</option>
          <option value={"jewelery"}>jewelery</option>
          <option value={"electronics"}>electronics</option>
        </select>
        <br />
        <br />
       Price <input
          type="text"
          onChange={(e) => handlechange(e)}
          value={price}
          name="price"
          placeholder="price"
        />
        <br />
        <br />
       Description <input
          type="text"
          onChange={(e) => handlechange(e)}
          value={description}
          name="description"
          placeholder="description"
        />
        <br />
        <br />
        <div style={{marginBottom:"15px"}}>
        <input style={{color:'red', backgroundColor:"black"}} type="submit" />
        </div>
        </div>
      </form>
    </div>
      <hr />
    <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "4px",
        }}>
      {product.length>0 && product.map((el)=>(<div key={el.id} style={{ border: "2px solid teal" }}>
        <img src={el.image} alt='' height={200} width={200}/>
        <p>{el.price}</p>
        <button onClick={()=>handledelete(el.id)}>Delete</button>
        <button onClick={()=>handlegetsingledata(el.id)}>Edit</button>
        
      </div>
      
    ))}
    </div>
    </div>
  )
}

export default Dashboard
