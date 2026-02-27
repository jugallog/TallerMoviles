// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0fk-UW_zoGZWgRfgIbu4JYS0DKUJjkMU",
  authDomain: "miproyectomovil-364cd.firebaseapp.com",
  databaseURL: "https://miproyectomovil-364cd-default-rtdb.firebaseio.com",
  projectId: "miproyectomovil-364cd",
  storageBucket: "miproyectomovil-364cd.firebasestorage.app",
  messagingSenderId: "103618437581",
  appId: "1:103618437581:web:7cdc5d849fa1fbd564e484"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)