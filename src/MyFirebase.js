// MyFirebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getDatabase } from "firebase/database";

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

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, db, auth, provider, signInWithPopup, signOut };
