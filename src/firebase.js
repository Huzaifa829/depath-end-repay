// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiEAi95_tfXbWk4phHmSRGGlnXJ1LlqTg",
  authDomain: "debth-repay.firebaseapp.com",
  projectId: "debth-repay",
  storageBucket: "debth-repay.appspot.com",
  messagingSenderId: "789352849422",
  appId: "1:789352849422:web:ce2b4f47a184fc02ad5c5f",
  measurementId: "G-Z105WPN7BN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export { auth, app };