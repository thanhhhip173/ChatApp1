import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';
import "firebase/database";
import "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAeZE1NiLgQyQDZv7RpZO1PVP0ydpTjbvA",
  authDomain: "chat-app-51e5a.firebaseapp.com",
  projectId: "chat-app-51e5a",
  storageBucket: "chat-app-51e5a.appspot.com",
  messagingSenderId: "717586820935",
  appId: "1:717586820935:web:26e7a781c31188e272e662"
};

firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();
firebase.initializeApp(firebaseConfig);

export { db, auth };
export default firebase;