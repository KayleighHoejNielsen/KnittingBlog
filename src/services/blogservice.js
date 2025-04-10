import { collection, addDoc, serverTimestamp, getDocs, query, orderBy } from "firebase/firestore"
import db from "../firebase"

//title, slug, type, content, imageUrl, alt
export const addBlogPost = async (formData) => {
    await addDoc(collection(db, "posts"), {
        content: formData.content,
        slug: formData.slug,
        title: formData.title,
        type: formData.type,
        imageUrl: formData.imageUrl,
        alt: formData.alt,
        createdAt: serverTimestamp()
    })
}

export const uploadToCloudinary = async (file) => {
    const formData = new FormData() 
    formData.append("file", file)
    formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET) 

    const response = await fetch(
        import.meta.env.VITE_CLOUDINARY_CLOUD_NAME, 
        {
            method: "POST",
            body: formData
        }
    )

    const data = await response.json()
    return data.secure_url
}

export const getAllBlogPosts = async () => {
    const postsTable = collection(db, "posts")
    //note to self: createdAt is the server timestamp field that is captured when its uploaded to firestore
    //I named the field that, and desc is meaning to order them descending.
    const orderedResults = query(postsTable, orderBy("createdAt", "desc")) 
    const allBlogs = await getDocs(orderedResults)

    const posts = allBlogs.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }))

    return posts
}
