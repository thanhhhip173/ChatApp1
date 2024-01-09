import db from "./config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
export const addUser = async (collectionName, data) => {
  await addDoc(collection(db, collectionName), {
    ...data,
    createdAt: serverTimestamp(),
  });
};
