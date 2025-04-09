import { useState } from "react"
import { addBlogPost} from "../services/blogservice"
import { uploadToCloudinary } from "../services/blogservice"

export default function CreateBlog() {
    const [title, setTitle] = useState("")
    const [slug, setSlug] = useState("")
    const [type, setType] = useState("")
    const [content, setContent] = useState("")
    const [alt, setAlt] = useState("")
    const [image, setImage] = useState(null)

    const submitBlog = async (e) => {
        e.preventDefault()
        if (!title || !slug || !type || !content || !image || !alt) {
            return(alert("Please fill in all of the fields and add an image!"))
        }

        console.log("submit button clicked")
        const imageUrl = await uploadToCloudinary(image)
        await addBlogPost(title, slug, type, content, imageUrl, alt)
        alert("blog post added!") //find something better here to let me know its uploaded --just feedback confirmation.
        setTitle("")
        setSlug("")
        setContent("")
        setAlt("")
    }

    const saveTitle = (event) => {
        setTitle(event.target.value)
    }
    
    const saveSlug = (event) => {
        setSlug(event.target.value)
    }
    
    const saveType = (event) => {
        setType(event.target.value)
    }
    
    const saveContent = (event) => {
        setContent(event.target.value)
    }
    
    const saveImage = (event) => {
        setImage(event.target.files[0])
    }

    const saveAlt = (event) => {
        setAlt(event.target.value)
    }

    return(
        <>
            <form className="create-form" onSubmit={submitBlog}> 
                <label htmlFor="title">Title:</label>
                <input 
                    id="title" 
                    type="text" 
                    value={title} 
                    onChange={saveTitle}
                />
                <label htmlFor="slug">Slug:</label>
                <input 
                    id="slug" 
                    type="text" 
                    value={slug} 
                    onChange={saveSlug} 
                />
                <label htmlFor="type">Type:</label>
                <select 
                    id="type" 
                    value={type} 
                    onChange={saveType}
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
                    type="text" 
                    value={alt} 
                    onChange={saveAlt} 
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
                    value={content} 
                    onChange={saveContent}
                />
                <button id="create" className="create-button" type="submit">Save</button>
            </form>
        </>
    )
}
