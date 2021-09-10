import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIrhAzZnLUk23aD-98G8QhA987CkDfAaA",
  authDomain: "whatsapp-clone-mern-2021.firebaseapp.com",
  projectId: "whatsapp-clone-mern-2021",
  storageBucket: "whatsapp-clone-mern-2021.appspot.com",
  messagingSenderId: "575345490828",
  appId: "1:575345490828:web:2dc2ccc2347e50e4a9b4a9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
