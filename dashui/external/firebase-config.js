// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// VIEJA CONFIGURACION ---------------------------------
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRrl0uJNQZgiKJtwsl7ptReZ6SNi3ZKng",
  authDomain: "api-neodogma.firebaseapp.com",
  projectId: "api-neodogma",
  storageBucket: "api-neodogma.appspot.com",
  messagingSenderId: "958771024888",
  appId: "1:958771024888:web:769e42c6aa13b01c9c7c0d",
  measurementId: "G-766BFT9DJJ"
};
// VIEJA CONFIGURACION ---------------------------------


//NUEVA CONFIGURACION --------------------------------------
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI72vp89kkN9qEoQOgIXCdg1D1xfssjjk",
  authDomain: "neodogma-c6825.firebaseapp.com",
  projectId: "neodogma-c6825",
  storageBucket: "neodogma-c6825.appspot.com",
  messagingSenderId: "581242057549",
  appId: "1:581242057549:web:18e57c1fc953ccf8233d04",
  measurementId: "G-V4M643D2S7"
};
//NUEVA CONFIGURACION --------------------------------------


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, db, auth, onAuthStateChanged };