import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDFhL90FGWtsMg-EPtyv9OMROBfS9YGKHA",
    authDomain: "todolist-9e969.firebaseapp.com",
    databaseURL: "https://todolist-9e969.firebaseio.com",
    projectId: "todolist-9e969",
    storageBucket: "todolist-9e969.appspot.com",
    messagingSenderId: "305592389524",
    appId: "1:305592389524:web:0b113897c8dca9c955c981",
    measurementId: "G-2RS3LLG1ZV"
});

export { firebaseConfig as firebase };