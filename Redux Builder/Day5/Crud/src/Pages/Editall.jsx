import React from "react";

const Editall = () => {
  return (
    <div>
      <h2>Edit All Data</h2>
      <input type="text" placeholder="enter title"/> <br /> <br />
      <input type="text" placeholder="enter price"/> <br /> <br />
      <input type="text" placeholder="enter description"/> <br /> <br />
      <input type="text" placeholder="enter image url"/> <br /> <br />
      <select name="" id="">
        <option value={"men's clothing"}>Men</option>
        <option value={"women's clothing"}>Women</option>
        <option value={"jewelery"}>Jewwlary</option>
        <option value={"electronics"}>Electronics</option>
      </select>
    </div>
  );
};

export default Editall;
