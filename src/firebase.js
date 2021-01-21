import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBDnIJlUOeNbnJcMUezs1SAJlTVjYjfTAg",
  authDomain: "clone-e15da.firebaseapp.com",
  projectId: "clone-e15da",
  storageBucket: "clone-e15da.appspot.com",
  messagingSenderId: "1083651045724",
  appId: "1:1083651045724:web:ef749f70d96da7ce47e999",
  measurementId: "G-07E80TF6HM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
