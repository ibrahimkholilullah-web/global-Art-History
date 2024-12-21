// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDgTH8TjvPG9bXdikJHAKaYdzo5xtMp-U",
  authDomain: "national-history.firebaseapp.com",
  projectId: "national-history",
  storageBucket: "national-history.firebasestorage.app",
  messagingSenderId: "95793232487",
  appId: "1:95793232487:web:d5399c0d5a7ba2033c32c2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
