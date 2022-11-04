// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxmu5qu5FC2ks_DfujRqLK4NNDTuTBGIs",
    authDomain: "ema-jhan-simple-website.firebaseapp.com",
    projectId: "ema-jhan-simple-website",
    storageBucket: "ema-jhan-simple-website.appspot.com",
    messagingSenderId: "872036161657",
    appId: "1:872036161657:web:641ff08c41430fa04a1ca8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;