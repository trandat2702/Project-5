// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwDwXOIU5xUVy7RQcAbGTLAXLhVH6yYdg",
  authDomain: "project-5-5f3d3.firebaseapp.com",
  databaseURL: "https://project-5-5f3d3-default-rtdb.firebaseio.com",
  projectId: "project-5-5f3d3",
  storageBucket: "project-5-5f3d3.firebasestorage.app",
  messagingSenderId: "735239518509",
  appId: "1:735239518509:web:fa9f1f7d1e7ba5c9bf3ba4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbFirebase = getDatabase(app);
export const authFirebase = getAuth(app);
