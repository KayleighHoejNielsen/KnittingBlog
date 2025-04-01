import { useState } from "react"
import { addBlogPost} from "../services/blogservice"

export default function CreateBlog() {
    const [title, setTitle] = useState("")
    const [slug, setSlug] = useState("")
    const [type, setType] = useState("")
    const [content, setContent] = useState("")

    const submitBlog = async (e) => {
        e.preventDefault()
        console.log("submit button clicked")
        await addBlogPost(title, slug, type, content)
        alert("blog post added!")
        setTitle("")
        setSlug("")
        setContent("")
    }

    return(
        <>
            <form className="create-form" onSubmit={submitBlog}> 
                <label htmlFor="title">Title:</label>
                <input 
                    id="title" 
                    type="text" 
                    value={title} onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="slug">Slug:</label>
                <input 
                    id="slug" 
                    type="text" 
                    value={slug} onChange={(e) => setSlug(e.target.value)} 
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