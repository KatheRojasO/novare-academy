import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "./firebaseSetup";

export async function createAccount(email, password) {
  let result = { status: false, payload: "", message: "" };

  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
    result = {
      status: true,
      payload: user.user.uid,
      message: "Account created",
    };
  } catch (error) {
    result.message = `Cannot creat account, ${error.code}!`;
  }
  return result;
}

export async function login(email, password) {
  let result = { status: false, payload: "", message: "" };

  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    result = {
      status: true,
      payload: user.user.uid,
      message: "Logged in",
    };
  } catch (error) {
    result.message = error.code;
  }
  return result;
}

export async function recoverAccount(email) {
  let result = { status: false, payload: "", message: "" };

  try {
    await sendPasswordResetEmail(auth, email);
    result = {
      status: true,
      payload: "",
      message: "Link sent",
    };
  } catch (error) {
    result.message = error.code;
  }
  return result;
}
