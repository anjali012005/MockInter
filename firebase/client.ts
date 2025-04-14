import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"


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
const app = !getApps().length ?  initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);