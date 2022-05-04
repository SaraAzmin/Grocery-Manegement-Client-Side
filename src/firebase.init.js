// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlRzbkK2K4Qi3ZPdtrH5FZ8kqdulvVT4E",
    authDomain: "grocery-inventory-client-side.firebaseapp.com",
    projectId: "grocery-inventory-client-side",
    storageBucket: "grocery-inventory-client-side.appspot.com",
    messagingSenderId: "406576146652",
    appId: "1:406576146652:web:112bc27f59b207dbadac19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;