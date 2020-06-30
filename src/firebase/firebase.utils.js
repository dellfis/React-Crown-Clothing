import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDlE-O1dlErCAg3k0DFdg5mc46uIE1rz8Y",
  authDomain: "crown-db-ea922.firebaseapp.com",
  databaseURL: "https://crown-db-ea922.firebaseio.com",
  projectId: "crown-db-ea922",
  storageBucket: "crown-db-ea922.appspot.com",
  messagingSenderId: "818634929436",
  appId: "1:818634929436:web:e328b76088790dddd6b6d9",
  measurementId: "G-STN659SLPB",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
