import { useParams, Link } from 'react-router-dom'
import { query, where, getDocs, collection } from 'firebase/firestore'
import db from '../firebase.js'
import { useEffect, useState } from 'react'
import DOMPurify from 'dompurify'
import { prettyDate } from '../services/functions.js'

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

    //{post.content}</article>

    function renderToHTML(content) {
        return { __html: DOMPurify.sanitize(content) }
    }

    return (
        <>
            <div className="blog-article">
                
                <div className="blog-type-decoration">
                    <h3 className="blog-type">{post.type}</h3>
                </div>
                <h2 className="blog-date">{prettyDate(post.createdAt)}</h2>
                <img className="blog-image" src={post.imageUrl} alt={post.alt}></img>
                <article className="blog-text" dangerouslySetInnerHTML={renderToHTML(post.content)} />
            </div>
            <Link to="/" className="blog-back">Back to Main</Link>
        </>
    )
}
