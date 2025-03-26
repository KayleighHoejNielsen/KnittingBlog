import { Link } from 'react-router-dom'
import BlogEntry from '../components/BlogEntry.jsx'
import data from '../data.js'

export default function Home() {
    const blogEntryElements = data.map((entry) => {
        return (
          <Link to={`/blog/${entry.slug}`}>
            <BlogEntry
              //this has to be separated for ordering etc. and has to be called "key"
              key={entry.slug}
              //note to self: now I am passing down the whole entry object I need to match up
              //whatever things are called in the entry object with the props names in BlogEntry component
              //i.e. the database you pull from has to have the same field names.
              entry={entry}
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