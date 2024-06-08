import React, { useEffect, useState } from "react";
import Data from "./Data";

const Display = () => {
  const [data, setdata] = useState([]);

  const [id, setid] = useState("");
  const [image, setimage] = useState("");
  const [price, setprice] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/productdata")
      .then((res) => res.json())
      .then((data) => setdata(data))
      .catch((err) => console.log(err));
  }, [data]);
  // ###############Delete Process##############
  const handledelete = (id) => {
    alert(id);
    fetch(`http://localhost:8080/productdata/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("data deleted");
      })
      .catch((err) => {
        console.log(err);
        alert("something went wrong");
      });
  };

  //#######################  Update Process########## PUT Method #########

  const handleupdate = (singledata) => {
    setid(singledata.id);
    setimage(singledata.image);
    settitle(singledata.title);
    setprice(singledata.price)
    setdescription(singledata.description)

  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let updatedata = {
      image,
      price,
      title,
      description,
    };
    fetch(`http://localhost:8080/productdata/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedata),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        alert("data updated")
      })
      .catch((error) => console.error("Error:", error));
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Insert Data</h1>
      <Data style={{ textAlign: "center" }} />
      <br />
      <br />
      <div>
          <h1 style={{ textAlign: "center" }}>Update data</h1>
          <form onSubmit={handlesubmit} style={{textAlign:"center"}}>
            <input
              type="text"
              name="image"
              value={image}
              onChange={(e) => setimage(e.target.value)}
            />
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
            <input
              type="text"
              name="price"
              value={price}
              onChange={(e) => setprice(e.target.value)}
            />
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            />
            <input type="submit"/>
          </form>
        </div>
      <h1 style={{ textAlign: "center" }}>Product Data</h1>
      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "4px",
        }}
      >
      

        {data.map((el) => (
          <div key={el.id} style={{ border: "2px solid teal" }}>
            <p>{el.id}</p>
            <img src={el.image} style={{ height: "200px", width: "200px" }} />
            <h5> price={el.price}</h5>
            <p> title={el.title}</p>
            <p>description={el.description}</p>
            <button onClick={() => handledelete(el.id)}>Delete</button>
            <button onClick={() => handleupdate(el)}>Update</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
