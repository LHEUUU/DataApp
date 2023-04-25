import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDPy8o4-9Pg8w7s7rgOFAr6P3H_-fry10o",
    authDomain: "carreirosproject-26e96.firebaseapp.com",
    projectId: "carreirosproject-26e96",
    storageBucket: "carreirosproject-26e96.appspot.com",
    messagingSenderId: "406458302088",
    appId: "1:406458302088:web:3c61245ea92ea4f13a693d",
    measurementId: "G-SRM1FQXGSQ"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);