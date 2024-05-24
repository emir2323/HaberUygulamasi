import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage"; // Storage modülünü ekleyin
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgctF74SuljUPY4i4bLoXlvXJWiXIlO5E",
  authDomain: "haber-app-91a7f.firebaseapp.com",
  projectId: "haber-app-91a7f",
  storageBucket: "haber-app-91a7f.appspot.com",
  messagingSenderId: "1086936861059",
  appId: "1:1086936861059:web:cde61a1b3c75aef1c78eb6",
  measurementId: "G-977HTCD3RW",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();
const storage = firebase.storage(); // Storage'ı initialize et
const auth = firebase.auth();

export { firebase, firestore, storage, auth };
