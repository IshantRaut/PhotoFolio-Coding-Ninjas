// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4hkpvfy9DTh__xDlaTw9l9juKRqacuBs",
  authDomain: "expense-2d4d3.firebaseapp.com",
  projectId: "expense-2d4d3",
  storageBucket: "expense-2d4d3.appspot.com",
  messagingSenderId: "1058515700250",
  appId: "1:1058515700250:web:0e7594f66355f92f089fa3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);