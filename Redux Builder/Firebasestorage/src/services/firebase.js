// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyeMMt_WHOdo0TOkdNxeHUsPApF0eJoAk",
  authDomain: "fir-storage-74abf.firebaseapp.com",
  projectId: "fir-storage-74abf",
  storageBucket: "fir-storage-74abf.appspot.com",
  messagingSenderId: "945773684969",
  appId: "1:945773684969:web:95a7d2d45ed2a6c82ea878"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
//fire store db 
export const db = getFirestore(app);