import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export const addDocument = async (collectionName: string, documentName: string, data: unknown) => {
  const collectionReference = collection(db, collectionName);

  await setDoc(doc(collectionReference, documentName), data);
};
