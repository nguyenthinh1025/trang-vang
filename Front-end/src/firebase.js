// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6PlxR1uw3jP_wepG-_aqIA1Zfw-E8N1c",
  authDomain: "trang-vang-e4fd3.firebaseapp.com",
  projectId: "trang-vang-e4fd3",
  storageBucket: "trang-vang-e4fd3.appspot.com",
  messagingSenderId: "642055397001",
  appId: "1:642055397001:web:00d15a7202fc894d1b3058",
  measurementId: "G-62SPW720ER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage_bucket = getStorage(app);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
export const firestore = getFirestore(app);
