// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCw0XDLNNHTlNKcbgkSVl6lNJk2OUEDNr0",
  authDomain: "bioscope-c0aff.firebaseapp.com",
  projectId: "bioscope-c0aff",
  storageBucket: "bioscope-c0aff.firebasestorage.app",
  messagingSenderId: "40682670879",
  appId: "1:40682670879:web:b52ace07a9e50ef3f07e2a",
  measurementId: "G-TYKRYQX1Z5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export const db = getFirestore(app);

export {auth}
// const analytics = getAnalytics(app);
// console.log(analytics);