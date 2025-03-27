//old firebase initialization import?
//import firebase from "firebase/app"
import { initializeApp  } from "firebase/app"

const config = {
    apiKey: "AIzaSyA3ep3hm4IchiW6vea_TLfK9nRihGQfIdg",
    authDomain: "kays-knitting-blog-4e328.firebaseapp.com",
    databaseURL: "",
    projectId: "kays-knitting-blog-4e328",
    storageBucket: "kays-knitting-blog-4e328.firebasestorage.app",
    messagingSenderId: "775646649242",
    appId: "1:775646649242:web:14d6e1403cb586f3593823"
}

let firebaseCache

export const getFirebase = () => {
    if (firebaseCache) {
        return firebaseCache
    }

    //old initialisation code?
    //firebase.initializeApp(config)
    //firebaseCache = firebase
    //return firebase

    const firebaseApp = initializeApp(config)
    firebaseCache = firebaseApp
    return firebaseApp
}