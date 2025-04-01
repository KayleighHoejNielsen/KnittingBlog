import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import db from "../firebase"

export const addBlogPost = async (title, slug, type, content) => {
    await addDoc(collection(db, "posts"), {
        content: content,
        slug: slug,
        title: title,
        type: type,
        createdAt: serverTimestamp()
    })
}