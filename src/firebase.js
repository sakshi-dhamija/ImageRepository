// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA1IADtjMkm6S2ReGE_WqN910MEe8OvEK8",
  authDomain: "imagre-repo.firebaseapp.com",
  projectId: "imagre-repo",
  storageBucket: "imagre-repo.appspot.com",
  messagingSenderId: "324168114522",
  appId: "1:324168114522:web:2953897a6796e59778d363",
  measurementId: "G-G9QPX9C052",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage };
