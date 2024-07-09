import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from "../Context/AuthContext";
function Login() {
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const {loginUser,authState}=useContext(AuthContext)

  const navigate=useNavigate()
  console.log(authState)
  console.log(loginUser);

  const handlesubmit=(e)=>{
    e.preventDefault()
    let userdata={
      email,password
    }
    axios.post("https://reqres.in/api/login",userdata).then((res)=>{
      loginUser(res.data.token);
      navigate("/dashboard")
    }).catch((err)=>console.log(err))
  }
  return (
    
    <div>
      <form data-testid="login-form" onSubmit={handlesubmit}>
        <div>
          <label>
            Email
            <input onChange={(e)=>setemail(e.target.value)} data-testid="email-input" type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
            onChange={(e)=>setpassword(e.target.value)}
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
