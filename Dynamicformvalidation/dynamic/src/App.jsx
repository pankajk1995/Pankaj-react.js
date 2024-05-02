import React, { useState } from 'react';

const initialState = {
  username: "",
  email: "",
  password: "",
  country: "",
  ismarried: false
};

function App() {
  const [farm, setFarm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFarm(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(farm);
    // Add your form submission logic here
  }

  const { username, email, password, country, ismarried } = farm;

  return (
    <div style={{ height: "400px", width: "400px", margin: "auto", border: "2px solid black" }}>
      <form onSubmit={handleSubmit} style={{marginLeft:"120px"}}>
      <h1>Form Handle</h1>
        <input type='text' name="username" value={username} placeholder='Enter Username....' onChange={handleChange} /><br /><br />
        <input type='email' name="email" value={email} placeholder='Enter Email...' onChange={handleChange} /><br /><br />
        <input type='password' name="password" value={password} placeholder='Enter Password...' onChange={handleChange} /><br /><br />
        <select name="country" value={country} onChange={handleChange}>
          <option value="">Select city</option>
          <option value="India">India</option>
          <option value="South America">South America</option>
          <option value="UAE">UAE</option>
        </select><br /><br />
        ismarried <input type='checkbox' name="ismarried" checked={ismarried} onChange={handleChange} /><br /><br />
        <input type='submit' />
      </form>
    </div>
  );
}

export default App;
