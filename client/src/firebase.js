// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKs1YGVYWk61KMGHwDAFh06DzR7Q9dmtI",
  authDomain: "electivereact.firebaseapp.com",
  projectId: "electivereact",
  storageBucket: "electivereact.appspot.com",
  messagingSenderId: "733558886655",
  appId: "1:733558886655:web:1628d044e9460e7e923cca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);
// Initialize Auth
const auth = getAuth(app);

export { db, auth };
