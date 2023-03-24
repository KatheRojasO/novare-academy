import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseSetup = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "novare-academy.firebaseapp.com",
  projectId: "novare-academy",
  storageBucket: "novare-academy.appspot.com",
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const firebaseApp = initializeApp(firebaseSetup);

export const auth = getAuth(firebaseApp);
export const database = getFirestore(firebaseApp);
export const cloudStorage = getStorage(firebaseApp);
 