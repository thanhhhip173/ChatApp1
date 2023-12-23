import db from './config';  
import firebase from 'firebase/compat/app';
export const addDocument = async (collection, data) => {
    const query = db.collection(collection);
    await query.add({
        ...data,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    console.log(data)

}   