import { ref, uploadBytes } from "firebase/storage";
import { cloudStorage } from "../Firebase/firebaseSetup";


export async function uploadFile(file, filePath) {
  const reference = ref(cloudStorage, filePath);

  await uploadBytes(reference, file);

  return `File uploaded successfully to ${filePath}`;
}