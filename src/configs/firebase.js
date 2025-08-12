// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase DB
// https://console.firebase.google.com/u/0/project/bloggdsc/firestore/data/~2Fposts~2FS9iBqS8T1NpZenqVdm8i

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3jPk-IrFW2p08R26AOHCLWFdl_NJD7e8",
  authDomain: "bloggdsc.firebaseapp.com",
  projectId: "bloggdsc",
  storageBucket: "bloggdsc.appspot.com",
  messagingSenderId: "415235853051",
  appId: "1:415235853051:web:d8e81136539c2ca9dcfe5e",
  measurementId: "G-QPBQL36DWS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
