// import firebase from 'firebase/compat/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, connectAuthEmulator } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAeZE1NiLgQyQDZv7RpZO1PVP0ydpTjbvA",
  authDomain: "chat-app-51e5a.firebaseapp.com",
  projectId: "chat-app-51e5a",
  storageBucket: "chat-app-51e5a.appspot.com",
  messagingSenderId: "717586820935",
  appId: "1:717586820935:web:26e7a781c31188e272e662"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
connectAuthEmulator(auth, "http://127.0.0.1:9099", {disableWarnings:true});
const db = getFirestore(app);
connectFirestoreEmulator(db, 'localhost', 8080);
const ggProvider = new GoogleAuthProvider();
const fbProvider = new GoogleAuthProvider();

export { auth, ggProvider, fbProvider};
export default db;
