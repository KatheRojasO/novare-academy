import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseSetup";

export async function createAccount(email, password) {
  let result = { status: false, payload: "", message: "" };

  console.log('hola')
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user)
    result = { status: true, payload: user.user.uid, message: "Account created" };
  } catch (error) {
    console.log(result.error)
    result.message = `Cannot creat account, ${error.code}!`
  }
  return result;
}
// export async function login(email, password) {}
// export async function recoverAccount(email) {}
