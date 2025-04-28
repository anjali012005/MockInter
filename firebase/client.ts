// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKgLSbBV7FBlL2OqAjksFqzSmVSF3yMG8",
  authDomain: "mockinter-19bea.firebaseapp.com",
  projectId: "mockinter-19bea",
  storageBucket: "mockinter-19bea.firebasestorage.app",
  messagingSenderId: "56014620588",
  appId: "1:56014620588:web:e87c1b6f6e79496d751c09",
  measurementId: "G-1QBPHW0XKB"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);