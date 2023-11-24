// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd841lfJ9uXjiTZbg1eF6wOcTuopFDITY",
  authDomain: "react-practice-a0014.firebaseapp.com",
  projectId: "react-practice-a0014",
  storageBucket: "react-practice-a0014.appspot.com",
  messagingSenderId: "889658036321",
  appId: "1:889658036321:web:71c9ec3e5a8a602db71a20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()