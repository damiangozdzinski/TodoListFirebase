import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

export const getCollection = async (collectionName: string, documentName: string) => {
  const documentReference = doc(db, collectionName, documentName);
  const documentSnapshot = await getDoc(documentReference);

  return documentSnapshot.exists() ? documentSnapshot.data() : undefined;
};
