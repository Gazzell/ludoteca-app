// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHGk92XzvtcR-DXnsWd0zqRe7W0cEfYDk",
  authDomain: "galuk-app.firebaseapp.com",
  projectId: "galuk-app",
  storageBucket: "galuk-app.appspot.com",
  messagingSenderId: "393450698662",
  appId: "1:393450698662:web:49d7e3a19929abd3cd8167",
  measurementId: "G-89DYX8PWVZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
