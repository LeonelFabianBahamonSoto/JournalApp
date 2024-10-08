// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgUkOJChhjHo-knvSRLied5wAeI6wbNag",
    authDomain: "react-app-curso-journala-bb53c.firebaseapp.com",
    projectId: "react-app-curso-journala-bb53c",
    storageBucket: "react-app-curso-journala-bb53c.appspot.com",
    messagingSenderId: "104231351028",
    appId: "1:104231351028:web:074dac623d8de4e639e4a1"
};

// Initialize Firebase
export const firebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( firebaseApp );
export const FirebaseDB = getFirestore( firebaseApp );