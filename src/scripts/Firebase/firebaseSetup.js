import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseSetup = {
  apiKey: "AIzaSyBe7qcrytZxfmyL9K9Uy3QMSVzyRmPmaoo",
  authDomain: "novare-academy.firebaseapp.com",
  projectId: "novare-academy",
  storageBucket: "novare-academy.appspot.com",
  messagingSenderId: "900796503620",
  appId: "1:900796503620:web:db358121d692a79f0d4e11",
};

const firebaseApp = initializeApp(firebaseSetup);

export const auth = getAuth(firebaseApp);
export const database = getFirestore(firebaseApp);
 