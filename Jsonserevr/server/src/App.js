import { useEffect, useState } from "react";
import Card from "./component/Card";



function App() {
  const [data,setdata]=useState([])

  useEffect(()=>{
function fetchData ()
{
  fetch("http://localhost:8080/data")
  .then((res)=>res.json())
  .then((data)=>setdata(data))
  .catch((err)=>console.log(err))
}
fetchData()
  },[])
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"4px"}}>
     {data.map((el)=><div key={el.id}> <Card image={el.image} title={el.title} price={el.price} description={el.description} category={el.category} /></div>)}
    </div>
  );
}
export default App;
