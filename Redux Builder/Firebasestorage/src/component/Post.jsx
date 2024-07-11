import { addDoc ,collection} from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../services/firebase";

let initialstate = {
  image: "",
  price: "",
  description: "",
  category: "",
  title: "",
};
const Post = () => {
    
  const [formdata, setformdata] = useState(initialstate);
  

  const { image, price, description, category, title } = formdata;

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

const postdata=async()=>{
try {
 await addDoc(collection(db,"products"),formdata)

} catch (error) {
    console.log(error)
}
}

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
postdata()
    
  };
  return (
    <div style={{height:"auto", width:"100%", margin:"auto", border:"3px solid green",marginTop:"25px"}}>
      <form action="" onSubmit={handlesubmit}>
        <div style={{marginTop:"20px"}}>
          <h5 style={{color:"green"}}>All Fields is Required</h5>
       Image <input
          type="text"
          onChange={(e) => handlechange(e)}
          value={image}
          name="image"
          placeholder="image" required
        />
        <br />
        <br />
     Title   <input
          type="text"
          onChange={(e) => handlechange(e)}
          value={title}
          name="title"
          placeholder="title" required
        />
        <br />
        <br />
        <select
          onChange={(e) => handlechange(e)}
          value={category}
          name="category" required
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
     Price   <input
          type="text"
          onChange={(e) => handlechange(e)}
          value={price}
          name="price"
          placeholder="price" required
        />
        <br />
        <br />
      Description  <input
          type="text"
          onChange={(e) => handlechange(e)}
          value={description}
          name="description"
          placeholder="description" required
        />
        <br />
        <br />
        <div style={{marginBottom:"15px"}}>
        <input type="submit" style={{color:'red', backgroundColor:"black"}} />
        </div>
        </div>
      </form>
    </div>
  );
};

export default Post;
