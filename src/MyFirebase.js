// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhZX94c2zRdmMb4uHJYIk9ruXPZRUCMbQ",
  authDomain: "globe-920d8.firebaseapp.com",
  databaseURL: "https://globe-920d8-default-rtdb.firebaseio.com",
  projectId: "globe-920d8",
  storageBucket: "globe-920d8.appspot.com",
  messagingSenderId: "797845774239",
  appId: "1:797845774239:web:11926c3141a51b61a227aa",
  measurementId: "G-CL28S4Y6WJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;