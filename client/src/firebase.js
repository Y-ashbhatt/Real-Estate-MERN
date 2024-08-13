// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-01.firebaseapp.com",
  projectId: "mern-real-estate-01",
  storageBucket: "mern-real-estate-01.appspot.com",
  messagingSenderId: "689422672140",
  appId: "1:689422672140:web:f61d71c74bba5c526ea929",
  measurementId: "G-Y5ZYM04QKG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
