import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const settings = {
    timestampsInSnapshots: true
};

const config = {
    //called firebaseapp
    apiKey: "AIzaSyDLBNCK0WJfNHZtM7qcsZqEfXY7Uyl_6Zc",
    authDomain: "codemirror-bd6a7.firebaseapp.com",
    projectId: "codemirror-bd6a7",
    storageBucket: "codemirror-bd6a7.appspot.com",
    messagingSenderId: "363968008179",
    appId: "1:363968008179:web:00fce553b09ec501558c86"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;