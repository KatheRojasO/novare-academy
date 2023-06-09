import { ref, getDownloadURL } from "firebase/storage";
import { cloudStorage } from "../Firebase/firebaseSetup";

export async function downloadFile(filePath) {
  const reference = ref(cloudStorage, filePath);
  const result = await getDownloadURL(reference);

  return result;
}