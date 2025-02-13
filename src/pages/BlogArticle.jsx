import data from '../data.js'
import { useParams, Link } from 'react-router-dom'

export default function BlogArticle() {
    //note to self: this is not taking the id from the data.js file. But it is taking whatever comes 
    //after the : in my route path. 
    const { id } = useParams()
    const blog = data.find((item) => item.id.toString() === id)

    if (!blog) {
            return <h2>post not found</h2>
    }

    return (
        <>
            <div className="blog-article">
                <h2 className="blog-date">{blog.date}</h2>
                <div className="type-decoration">
                    <h3 className="blog-type">{blog.type}</h3>
                </div>
                <img className="blog-image" src={blog.img.src} alt={blog.img.alt}></img>
                <article className="blog-text">{blog.text}</article>
            </div>
            <Link to="/">Back to Main</Link>
        </>
    )
}