// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2lofWSQ8zO5mY2HHZks7kpu0bL_mral0",
  authDomain: "auth-integration-private-97f4d.firebaseapp.com",
  projectId: "auth-integration-private-97f4d",
  storageBucket: "auth-integration-private-97f4d.appspot.com",
  messagingSenderId: "88924545460",
  appId: "1:88924545460:web:fd945b53f86911bd1792e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
