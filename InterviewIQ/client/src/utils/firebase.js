

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "interviewiq-dcc32.firebaseapp.com",
  projectId: "interviewiq-dcc32",
  storageBucket: "interviewiq-dcc32.firebasestorage.app",
  messagingSenderId: "379264672105",
  appId: "1:379264672105:web:5d3ca4d3494ba13a70ddf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}