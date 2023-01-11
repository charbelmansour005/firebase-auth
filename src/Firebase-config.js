import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAV8J9ZA_NZ1hnhLQiLUrq2HW_Lg3DYcko",
  authDomain: "authentication-tutorial-3f3a5.firebaseapp.com",
  projectId: "authentication-tutorial-3f3a5",
  storageBucket: "authentication-tutorial-3f3a5.appspot.com",
  messagingSenderId: "163114650852",
  appId: "1:163114650852:web:f45174bb20d8fe838970f1",
  measurementId: "G-HQFHFED5Y7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
