import { useState } from "react"
import { addBlogPost} from "../services/blogservice"
import { uploadToCloudinary } from "../services/blogservice"

export default function CreateBlog() {
    //const [title, setTitle] = useState("")
    //const [slug, setSlug] = useState("")
    //const [type, setType] = useState("")
    //const [content, setContent] = useState("")
    //const [alt, setAlt] = useState("")
    //const [image, setImage] = useState(null)

    //const submitBlog = async (e) => {
    //    e.preventDefault()
    //    if (!title || !slug || !type || !content || !image || !alt) {
    //        return(alert("Please fill in all of the fields and add an image!"))
    //    }

    //    console.log("submit button clicked")
    //    const imageUrl = await uploadToCloudinary(image)
    //    await addBlogPost(title, slug, type, content, imageUrl, alt)
    //    alert("blog post added!") //find something better here to let me know its uploaded --just feedback confirmation.
    //    setTitle("")
    //    setSlug("")
    //    setContent("")
    //    setAlt("")
    //}

    //const saveTitle = (event) => {
    //    setTitle(event.target.value)
    //}
    
    //const saveSlug = (event) => {
    //    setSlug(event.target.value)
    //}
    
    //const saveType = (event) => {
    //    setType(event.target.value)
    //}
    
    //const saveContent = (event) => {
    //    setContent(event.target.value)
    //}
    
    //const saveImage = (event) => {
    //    setImage(event.target.files[0])
    //}

    //const saveAlt = (event) => {
    //    setAlt(event.target.value)
    //}
    const initialFormData = {
        title: "",
        slug: "",
        type: "",
        alt: "",
        image: null,
        content: ""
    }

    const [formData, setFormData] = useState(initialFormData)

    const saveData =(inputtedData) => {
        const { name, value } = inputtedData.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const saveImage = (inputtedImage) => {
        setFormData(prev => ({
            ...prev,
            image: inputtedImage.target.files[0]
        }))
    }

    const submitBlog = async (blogData) => {
        blogData.preventDefault()

        const { title, slug, type, alt, image, content } = formData

        if (!title || !slug || !type || !content || !image || !alt) {
            return alert("Please fill in all of the fields and add an image!")
        }

        console.log("fromData being submitted:", formData)
        const imageUrl = await uploadToCloudinary(image)
        await addBlogPost({ ...formData, image: imageUrl })

        alert("Blog post added!")
        setFormData(initialFormData)
    }

    return(
        <>
            <form className="create-form" onSubmit={submitBlog}> 
                <label htmlFor="title">Title:</label>
                <input 
                    id="title" 
                    name="title"
                    type="text" 
                    value={formData.title} 
                    onChange={saveData}
                />
                <label htmlFor="slug">Slug:</label>
                <input 
                    id="slug" 
                    name="slug"
                    type="text" 
                    value={formData.slug} 
                    onChange={saveData} 
                />
                <label htmlFor="type">Type:</label>
                <select 
                    id="type" 
                    name="type"
                    value={formData.type} 
                    onChange={saveData}
                >   
                    <option value="" disabled>Select Type</option>
                    <option value="blanket">Blanket</option>
                    <option value="cardigan">Cardigan</option>
                    <option value="gloves">Gloves</option>
                    <option value="hat">Hat</option>
                    <option value="scarf">Scarf</option>
                    <option value="shawl">Shawl</option>
                    <option value="sock">Sock</option>
                    <option value="sweater">Sweater</option>
                </select>
                <label htmlFor="alt">Image Alt Text</label>
                <input 
                    id="alt" 
                    className="alt"
                    name="alt"
                    type="text" 
                    value={formData.alt} 
                    onChange={saveData} 
                />
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={saveImage} 
                />
                <label htmlFor="content">Content:</label>
                <textarea 
                    id="content" 
                    name="content" 
                    value={formData.content} 
                    onChange={saveData}
                />
                <button id="create" className="create-button" type="submit">Save</button>
            </form>
        </>
    )
}
