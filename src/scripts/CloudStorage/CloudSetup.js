import { firebase } from "../Firebase/firebaseSetup";
import { getStorage } from "firebase/storage";

export const cloudStorage = getStorage(firebase);