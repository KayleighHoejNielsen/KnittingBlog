import { initializeApp  } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDEP1T2W4o_OgrcU4dsy0999V6H5gVLaTk",
    authDomain: "kays-knitting-blog2.firebaseapp.com",
    projectId: "kays-knitting-blog2",
    storageBucket: "kays-knitting-blog2.firebasestorage.app",
    messagingSenderId: "418549159072",
    appId: "1:418549159072:web:520dc9bb9856354323a5c5"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
