import data from '../data.js' //remove this when it all works
import { useParams, Link } from 'react-router-dom'
import { query, where, getDocs, collection } from 'firebase/firestore'
import db from '../firebase.js'
import { useEffect, useState } from 'react'

export default function BlogArticle() {
    //note to self: this is not taking the id from the data.js file. But it is taking whatever comes 
    //after the : in my route path. 
    //const { slug } = useParams()
    //const blog = data.find((item) => item.id.toString() === slug)

    //if (!blog) {
    //        return <h2>post not found</h2>
    //}

    const { slug } = useParams()
    const [post, setPost] = useState(null)
    const [loading, setLoading] =useState(true)

    useEffect (() => {
        const fetchPost = async () => {
            try {
                const postsRef = collection(db, "posts")
                const q = query(postsRef, where("slug", "===", slug))
                const querySnapshot = await getDocs(q)

                if (!querySnapshot.empty) {
                    const postDoc = query.snapshot.docs[0]
                    setPost({id: postDoc.id, ...postDoc.data() })
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

    return (
        <>
            <div className="blog-article">
                <h2 className="blog-date">{blog.createdAt?.seconds? newDate(post.createdAt.seconds * 1000).toLocaleDateString() : "Unknown date"}</h2>
                <div className="blog-type-decoration">
                    <h3 className="blog-type">{post.type}</h3>
                </div>
                <img className="blog-image" src={post.imageUrl} alt={post.alt}></img>
                <article className="blog-text">{post.content}</article>
            </div>
            <Link to="/" className="blog-back">Back to Main</Link>
        </>
    )
}
