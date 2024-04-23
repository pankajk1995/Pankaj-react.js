import Fiction from "./component/Fiction";

import './App.css'
import NonFiction from "./component/NonFiction";
import { useState } from "react";

function App() {
  const [value,setvalue]=useState(true)
  return (
    <div>
      <h1 className="App" style={{color:"tomato"}}>Mini Book Store</h1>

      <button  onClick={()=>setvalue(!value)} style={{height:45}} ><h2>{value?"show finctional Book":"show not finctional book" }</h2></button>

      <div className="App">
        {/* Render either Fiction or NonFiction Based on the Condition */}
        {value?<Fiction/>:<NonFiction/>}


      </div>
    </div>
  );
}

export default App;
