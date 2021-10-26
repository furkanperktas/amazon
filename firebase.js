import firebase from "firebase";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD47VDn8nckXxU16fE3J3HV8Cp39BSp8Ng",
  authDomain: "my-clones.firebaseapp.com",
  projectId: "my-clones",
  storageBucket: "my-clones.appspot.com",
  messagingSenderId: "638253212770",
  appId: "1:638253212770:web:2f3715f0685fee45341d3b",
  measurementId: "G-SZC143LERD",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
