import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBJjBShgKvNehiy-gRpEDj5iSWzrrdwevI",
    authDomain: "crwn-db-d01a9.firebaseapp.com",
    databaseURL: "https://crwn-db-d01a9.firebaseio.com",
    projectId: "crwn-db-d01a9",
    storageBucket: "crwn-db-d01a9.appspot.com",
    messagingSenderId: "765040607774",
    appId: "1:765040607774:web:22b0feab84e339ef56e40f",
    measurementId: "G-ESH54HL18Y"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
