// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCksl-A-fgGB-uhv0F2bdd8g1lW_98LQRY",
  authDomain: "sale-draw.firebaseapp.com",
  projectId: "sale-draw",
  storageBucket: "sale-draw.appspot.com",
  messagingSenderId: "228747704305",
  appId: "1:228747704305:web:ad433ae82e34ec367bb650",
  measurementId: "G-TC5PX1HCNE"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db= getFirestore(app)
export const analytics = getAnalytics(app);