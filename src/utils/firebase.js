// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9x2mI1U3tYiKye9h38NciVSP02uyfjIM",
  authDomain: "movies-gpt-7dd1d.firebaseapp.com",
  projectId: "movies-gpt-7dd1d",
  storageBucket: "movies-gpt-7dd1d.appspot.com",
  messagingSenderId: "716312967810",
  appId: "1:716312967810:web:ba72c8f54c608ac66f129b",
  measurementId: "G-YDMWW7LCHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();