// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6KvJBy8LWI1kytkTD_eMuvWsRobwHyUU",
  authDomain: "loginsetup-d95df.firebaseapp.com",
  projectId: "loginsetup-d95df",
  storageBucket: "loginsetup-d95df.appspot.com",
  messagingSenderId: "382648944269",
  appId: "1:382648944269:web:6da779246958517a4084c4",
  measurementId: "G-SFMV0REZ3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app); 

export { auth, app, db };