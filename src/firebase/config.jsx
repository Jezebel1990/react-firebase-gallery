// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3bZJ_HqV7uTcYICSzjnVyv1V5jGtKI38",
  authDomain: "react-firebase-gallery-d-2fabf.firebaseapp.com",
  projectId: "react-firebase-gallery-d-2fabf",
  storageBucket: "react-firebase-gallery-d-2fabf.appspot.com",
  messagingSenderId: "493030082658",
  appId: "1:493030082658:web:5f7bf4ad19a1588caa293b"
};




// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();