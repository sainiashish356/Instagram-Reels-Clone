import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT27VGr7wYNPViDSemP6NlSD5_BaNd3Yw",
  authDomain: "reelsclone-3772d.firebaseapp.com",
  projectId: "reelsclone-3772d",
  storageBucket: "reelsclone-3772d.appspot.com",
  messagingSenderId: "692245790196",
  appId: "1:692245790196:web:4f5d9b91d96c499e3acda1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()