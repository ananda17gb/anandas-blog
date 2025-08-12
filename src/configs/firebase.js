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
  apiKey: import.meta.env.first_VITE_API_KEY,
  authDomain: import.meta.env.first_VITE_AUTH_DOMAIN,
  projectId: import.meta.env.first_VITE_PROJECT_ID,
  storageBucket: import.meta.env.first_VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.first_VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.first_VITE_APP_ID,
  measurementId: import.meta.env.first_VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
