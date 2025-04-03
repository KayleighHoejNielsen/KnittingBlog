import { initializeApp  } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyC_6RA9kq5Q48nbnAAIWEZfUtWe3DyDzUc",
    authDomain: "kays-knitting-blog3.firebaseapp.com",
    projectId: "kays-knitting-blog3",
    storageBucket: "kays-knitting-blog3.firebasestorage.app",
    messagingSenderId: "611891877489",
    appId: "1:611891877489:web:24690fdf6e32fd18886dd0"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
