import { Link } from 'react-router-dom'
import BlogEntry from '../components/BlogEntry.jsx'
import { useState, useEffect } from 'react'
import { getAllBlogPosts } from '../services/blogservice.js'

export default function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
      const fetchPosts = async () => {
        const blogPosts = await getAllBlogPosts()
        setPosts(blogPosts)
      }

      fetchPosts()
    }, [])

    const blogEntryElements = posts.map((post) => {
        return (
          <Link to={`/blog/${post.slug}`}>
            <BlogEntry
              //this has to be separated for ordering etc. and has to be called "key"
              key={post.id}

              title={post.title}
              type={post.type}
              imageUrl={post.imageUrl}
              content={post.content}
              createdAt={post.createdAt}
              slug={post.slug}
            />
          </Link>
        )
      })
    
      return (
        <div className="main-content">
          <main className="blog-tile">
              {blogEntryElements}
          </main>
        </div>
      )
}
