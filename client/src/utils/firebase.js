import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-7762c.firebaseapp.com",
  projectId: "authexamnotes-7762c",
  storageBucket: "authexamnotes-7762c.firebasestorage.app",
  messagingSenderId: "1062228896586",
  appId: "1:1062228896586:web:d5855c3a4927c8306cafb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth,provider};