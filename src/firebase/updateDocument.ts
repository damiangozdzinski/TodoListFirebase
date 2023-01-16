import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export const updateDocument = async (
  collectionName: string,
  documentName: string,
  data: unknown
) => {
  const collectionReference = collection(db, collectionName);

  if (data) await setDoc(doc(collectionReference, documentName), data, { merge: true });
};
