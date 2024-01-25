// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABKcEpbv5QdpiW732Pl3ddQi551tIcO0M",
  authDomain: "chatt-app-4cdd1.firebaseapp.com",
  projectId: "chatt-app-4cdd1",
  storageBucket: "chatt-app-4cdd1.appspot.com",
  messagingSenderId: "622519297749",
  appId: "1:622519297749:web:8c6749bd9d26dd7823e45c",
  measurementId: "G-JG7Y5QLT2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const analytics = getAnalytics(app);