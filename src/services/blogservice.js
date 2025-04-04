import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import db from "../firebase"

export const addBlogPost = async (title, slug, type, content, imageUrl) => {
    await addDoc(collection(db, "posts"), {
        content: content,
        slug: slug,
        title: title,
        type: type,
        imageUrl: imageUrl,
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
