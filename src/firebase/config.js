// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import * as firebase from "firebase/app";
 //import 'firebase/storage';
// import 'firebase/firestore';

import firebase from 'firebase/compat/app'
import 'firebase/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  


  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_CENTER_ID,
  appId: process.env.REACT_APP_FIREBASE_ID


  
  
  
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const projectStore = firebase.firestore();
const timestamp=firebase.firestore.FieldValue.serverTimestamp;



//const storageRef = ref(storage);
export  {storage,projectStore,timestamp};