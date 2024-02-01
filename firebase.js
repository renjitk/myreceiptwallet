// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import * as firebase from "firebase";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGhnZNm0ieDNqrX2-n9BXh_BLETly3fhQ",
  authDomain: "myreceiptwallet-388d3.firebaseapp.com",
  projectId: "myreceiptwallet-388d3",
  storageBucket: "myreceiptwallet-388d3.appspot.com",
  messagingSenderId: "320587052270",
  appId: "1:320587052270:web:85f43d578b0b53ba962fff",
  measurementId: "G-ENB900SQR8"
};

// Initialize Firebase
// let app;
// if (firebase.apps.lenght === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app()
// }
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

//const analytics = getAnalytics(app);

export {auth};