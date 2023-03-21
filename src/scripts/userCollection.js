import { collection, query, where} from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { database } from "./firebaseSetup";

const collectionName = "users"

//Retrieve user by email
export async function getUser(email) {

  const emailQuery = query(collection(database, collectionName), where("email", "==", email))
  const querySnapshot = await getDocs(emailQuery);
  const queryDoc = querySnapshot.docs[0];

  const userDocument = { id: queryDoc.id, ...queryDoc.data() };

  return userDocument;
}
