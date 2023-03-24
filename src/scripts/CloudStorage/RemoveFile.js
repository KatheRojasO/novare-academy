import { ref, deleteObject } from "firebase/storage";
import { cloudStorage } from "../Firebase/firebaseSetup";

export async function downloadFile(filePath) {
  const reference = ref(cloudStorage, filePath);

  await deleteObject(reference)

  return `File uploaded successfully to ${filePath}`;
}