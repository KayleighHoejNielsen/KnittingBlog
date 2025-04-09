import { useParams, Link } from 'react-router-dom'
import { query, where, getDocs, collection } from 'firebase/firestore'
import db from '../firebase.js'
import { useEffect, useState } from 'react'

export default function BlogArticle() {
    const { slug } = useParams()
    const [post, setPost] = useState(null)
    const [loading, setLoading] =useState(true)

    useEffect (() => {
        const fetchPost = async () => {
            if (!slug) {
                console.error("slug is missing.")
                return
            }

            try {
                const postsTable = collection(db, "posts")
                const matchSlugQuery = query(postsTable, where("slug", "==", slug))
                const result = await getDocs(matchSlugQuery)

                if (!result.empty) {
                    const correctBlog = result.docs[0]
                    setPost({ id: correctBlog.id, ...correctBlog.data() })
                } else {
                    console.log("no post found with this slug")
                }
            } catch (error) {
                console.error("error fetching post:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchPost()
    }, [slug])

    if (loading) return <p>loading...</p>
    if (!post) return <p>post not found</p>

    const prettyDate = (timestamp) => {
        if (!timestamp || !timestamp.seconds) return "there is no date"

        const date = new Date(timestamp.seconds * 1000)

        const day = date.getDate()
        const month = date.toLocaleString("en-GB", {month: "long"})
        const year = date.getFullYear()
        
        //there is definitely some package I could download to do this for me
        //but I thought it was pretty neat to do it myself and work out how it does it. fun.
        const getOrdinal = (n) => {
            const s = ["th", "st", "nd", "rd"]
            const v = n % 100
            return s[(v-20) % 10] || s[v] || s[0]
        }
        
        return `${day}${getOrdinal(day)} ${month} ${year}`
    }

    return (
        <>
            <div className="blog-article">
                
                <div className="blog-type-decoration">
                    <h3 className="blog-type">{post.type}</h3>
                </div>
                <h2 className="blog-date">{prettyDate(post.createdAt)}</h2>
                <img className="blog-image" src={post.imageUrl} alt={post.alt}></img>
                <article className="blog-text">{post.content}</article>
            </div>
            <Link to="/" className="blog-back">Back to Main</Link>
        </>
    )
}
