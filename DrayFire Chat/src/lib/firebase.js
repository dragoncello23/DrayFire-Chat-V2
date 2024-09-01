// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "drayfire-chat.firebaseapp.com",
  projectId: "drayfire-chat",
  storageBucket: "drayfire-chat.appspot.com",
  messagingSenderId: "1085992181147",
  appId: "1:1085992181147:web:3896d0c2e0ac2383f7153e",
  measurementId: "G-T7ZWWBNNKF"
};

const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
