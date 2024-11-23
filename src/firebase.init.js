// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOLElj0F8qGp8K0dDbQjK5XVFY5LpN_s8",
  authDomain: "practise-2-5a616.firebaseapp.com",
  projectId: "practise-2-5a616",
  storageBucket: "practise-2-5a616.firebasestorage.app",
  messagingSenderId: "625528394677",
  appId: "1:625528394677:web:00922f426d891cd987bffc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);