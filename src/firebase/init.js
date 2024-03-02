// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//  web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY6bIwU0nLDB2GZch3xrvP0ZFy5oNfV3I",
  authDomain: "petstore-ac1ea.firebaseapp.com",
  projectId: "petstore-ac1ea",
  storageBucket: "petstore-ac1ea.appspot.com",
  messagingSenderId: "512678686304",
  appId: "1:512678686304:web:fa34a6a6fcc53d1d7a1d05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// init & export firestore service
export const db = getFirestore()
// generate & export auth object
export const auth = getAuth()
export default db;//