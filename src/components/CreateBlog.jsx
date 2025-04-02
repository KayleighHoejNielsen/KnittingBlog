import { useState } from "react"
import { addBlogPost} from "../services/blogservice"
import { uploadToCloudinary } from "../services/blogservice"

export default function CreateBlog() {
    const [title, setTitle] = useState("")
    const [slug, setSlug] = useState("")
    const [type, setType] = useState("")
    const [content, setContent] = useState("")
    const [image, setImage] = useState(null)

    const submitBlog = async (e) => {
        e.preventDefault()
        if (!title || !slug || !type || !content || !image) {
            alert("Please fill in all of the fields and add an image!")
        }
        
        console.log("submit button clicked")
        const imageUrl = await uploadToCloudinary(image)
        await addBlogPost(title, slug, type, content, imageUrl)
        alert("blog post added!") //find something better here to let me know its uploaded --just feedback confirmation.
        setTitle("")
        setSlug("")
        setContent("")
        setImage(null)
    }
    // note to self: the "e" used with the onchange is the "event" that is happening when something is changed in the input
    // so we are setting the state to now be whatever event has been logged in the input
    //also note to self: specifying the index on the image because it actually brings back an array of images letting you
    // you have more than one. In this case I only want one at a time, so choosing the first index in the array
    return(
        <>
            <form className="create-form" onSubmit={submitBlog}> 
                <label htmlFor="title">Title:</label>
                <input 
                    id="title" 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="slug">Slug:</label>
                <input 
                    id="slug" 
                    type="text" 
                    value={slug} 
                    onChange={(e) => setSlug(e.target.value)} 
                />
                <label htmlFor="type">Type:</label>
                <select 
                    id="type" 
                    value={type} 
                    onChange={(e) => setType(e.target.value)}
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
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={(e) => setImage(e.target.files[0])}
                />
                <label htmlFor="content">Content:</label>
                <textarea 
                    id="content" 
                    name="content" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)}
                />
                <button id="create" className="create-button" type="submit">Save</button>
            </form>
        </>
    )
}