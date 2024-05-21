import { useState } from "react";
import "./App.css";
import Post from './component/Post'

function App() {
  const [data, setdata] = useState([]);
const [hide,sethide] = useState(false)
  const handleget = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) =>setdata(data))
      .catch((err) => console.log(err));
      sethide(!hide)
  };

  return (
    <div>
      <button onClick={handleget} >{hide ? "HideData":"ShowData"}</button>
      <div>
      { hide &&  data.map((el)=>
      <Post key={el.id} body={el.body} title={el.title}/> 
  
      )}
      </div>

    </div>
  );
}

export default App;
