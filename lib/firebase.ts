// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvc8P8If8pwL9sEJ6gQFtW4O1O2grD1YM",
  authDomain: "msw-store-5be68.firebaseapp.com",
  projectId: "msw-store-5be68",
  storageBucket: "msw-store-5be68.firebasestorage.app",
  messagingSenderId: "400978328846",
  appId: "1:400978328846:web:75cf4c3ed6119b0f9c6b5f",
  measurementId: "G-4DX3CPG3S2"
};

const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

export const db = getFirestore(app);
export const storage = getStorage(app);