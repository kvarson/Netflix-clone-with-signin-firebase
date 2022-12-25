// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID,
};

// REACT_APP_FIREBASE_API_KEY=AIzaSyAM2wQbJcUdo0N4Rs3NC5AEZ3DJ5ggTZiA
// REACT_APP_FIREBASE_AUTH_DOMAIN=netflix-clone-cb86c.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=netflix-clone-cb86c
// REACT_APP_FIREBASE_STORAGE_BUCKET=netflix-clone-cb86c.appspot.com
// REACT_APP_MESSAGING_SENDER=965759192942
// REACT_APP_APP_ID=1:965759192942:web:bbc0c67de6d7687dcafb7f

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
