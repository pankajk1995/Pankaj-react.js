import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../services/firebase'
import GoogleButton from 'react-google-button'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
const Login = () => {
    
    
    const handleclick=()=>{
        signInWithPopup(auth,provider)   
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    const handlelogout=()=>{
        signOut(auth)
        .then((res)=>{
            alert("logout")
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
      
      <GoogleButton style={{marginTop:"5px"}} onClick={handleclick}>Login With Google</GoogleButton>
      <button style={{marginTop:"10px"}} onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Login
