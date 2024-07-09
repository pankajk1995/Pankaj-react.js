// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpA8LUrpuwwATl0nLLc_XMjsebBLjQMXs",
  authDomain: "firedemo-87e73.firebaseapp.com",
  projectId: "firedemo-87e73",
  storageBucket: "firedemo-87e73.appspot.com",
  messagingSenderId: "579341323682",
  appId: "1:579341323682:web:b13be939a6231b427676fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();