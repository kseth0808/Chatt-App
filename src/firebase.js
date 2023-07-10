import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getstorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAnYCs8owsYdhjhRfNfrK5qJLf1BR1_r1w",
  authDomain: "chat-566be.firebaseapp.com",
  projectId: "chat-566be",
  storageBucket: "chat-566be.appspot.com",
  messagingSenderId: "114983453159",
  appId: "1:114983453159:web:f10858739275b57feffd42",
  measurementId: "G-0LHR8Q1HFS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const storage = getstorage();