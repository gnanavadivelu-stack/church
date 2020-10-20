import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import * as PATHS from './collections';
import {DB_PATH_MAGAZINES} from "./collections";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7wckRThQhywQ0k4DI7lELLrkmF2hd7MM",
    authDomain: "religen-church-demo.firebaseapp.com",
    databaseURL: "https://religen-church-demo.firebaseio.com",
    projectId: "religen-church-demo",
    storageBucket: "religen-church-demo.appspot.com",
    messagingSenderId: "217073632743",
    appId: "1:217073632743:web:ee533a2759043eec5de942",
    measurementId: "G-L3EWHYSV91"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


export async function getDocs(path) {
    const snapshot = await db.collection(path).get()
    return snapshot.docs.map(doc => doc.data())
};

export async function getDocById(path, id) {
    const snapshot = await db.collection(path).doc(id).get();
    return snapshot.data() || [];
};

