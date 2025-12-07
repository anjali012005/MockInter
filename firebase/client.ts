import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBKgLSbBV7FBlL2OqAjksFqzSmVSF3yMG8",
//   authDomain: "mockinter-19bea.firebaseapp.com",
//   projectId: "mockinter-19bea",
//   // storageBucket: "mockinter-19bea.firebasestorage.app",
//   storageBucket: "mockinter-19bea.appspot.com",
//   messagingSenderId: "56014620588",
//   appId: "1:56014620588:web:e87c1b6f6e79496d751c09",
//   measurementId: "G-1QBPHW0XKB"
// };

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);