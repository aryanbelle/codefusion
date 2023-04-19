// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAFFWOSnFqi9M-BXfzRvSfG5XhqsFEpv1k",
  authDomain: "socialcommunity-f33e5.firebaseapp.com",
  projectId: "socialcommunity-f33e5",
  storageBucket: "socialcommunity-f33e5.appspot.com",
  messagingSenderId: "735420376558",
  appId: "1:735420376558:web:57398bad76eaee645c5aff",
  measurementId: "G-3F88FMYRJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider()