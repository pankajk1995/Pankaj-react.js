import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [search, setsearch] = useSearchParams();

  const [category, setcategory] = useState(search.getAll("category") || []);

  const [sort,setsort]=useState(search.get("sort") || null)

  useEffect(() => {
    setsearch({ category ,sort});
  }, [category,sort]);
console.log(category);
  const handleSubmit = (e) => {
    let { value } = e.target;

    let newcategory = [...category];
    if (newcategory.includes(value)) {
      newcategory = newcategory.filter((el) => el != value);
    } else {
      newcategory.push(value);
    }
    setcategory(newcategory);
  };
  console.log(category);
  return (
    <div>
      <div>
        <h1 style={{ color: "grey" }}>Category</h1>
        <div>
          <input
            type="checkbox"
            value={"men's clothing"}
            checked={category.includes("men's clothing")}
            onChange={(e) => handleSubmit(e)}
          />{" "}
          Men
          <br />
          <input
            type="checkbox"
            value={"women's clothing"}
            checked={category.includes("women's clothing")}
            onChange={(e) => handleSubmit(e)}
          />{" "}
          Women <br />
          <input
            type="checkbox"
            value={"jewelery"}
            checked={category.includes("jewelery")}
            onChange={(e) => handleSubmit(e)}
          />{" "}
          Jewellary
          <br />
          <input
            type="checkbox"
            value={"electronics"}
            checked={category.includes("electronics")}
            onChange={(e) => handleSubmit(e)}
          />{" "}
          Electronics
          <br />
        </div>
      </div>
      <br/>
      <input type="radio" name="price" onChange={()=>setsort("asc")}/>LowToHigh
      <input type="radio" name="price" onChange={()=>setsort("desc")}/>HighToLow
      {/* <select>
        <option >Select Price</option>
        <option value="price" onChange={()=>setsort("asc")}>LowToHight</option>
        <option value = "price"onChange={()=>setsort("desc")}>HighToLow</option>
      </select> */}
      
    </div>
  );
};

export default Sidebar;
