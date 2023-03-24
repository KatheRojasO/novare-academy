import { collection, doc } from "firebase/firestore";
import { getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { database } from "./Firebase/firebaseSetup";

const collectionName = "courses";
const coursesCollection = collection(database, collectionName);

//Create a collection
export async function createCourse(data) {
  console.log(data)
  const document = await addDoc(coursesCollection, data);
  const result = document.id;
  return result;
}

//Read documents in the collection
export async function readCourses() {
  const querySnapshot = await getDocs(coursesCollection);
  const result = [];
  querySnapshot.forEach((doc) => {
    const document = { id: doc.id, ...doc.data() };
    result.push(document);
  });
  return result;
}

//Update documents in the collection
export async function updateCourse(documentToUpdate) {
  const id = documentToUpdate.id;
  const reference = doc(database, collectionName, id);
  await updateDoc(reference, documentToUpdate);
  return id;
}

//Delete a document in the collection
export async function deleteCourse(id) {
  const reference = doc(database, collectionName, id);
  await deleteDoc(reference);
  return id;
}
