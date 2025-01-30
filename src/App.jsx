import './index.css'
import Header from './components/Header.jsx'
import Title from './components/Title.jsx'
import Footer from './components/Footer.jsx'
import BlogEntry from './components/BlogEntry.jsx'
import data from './data.js'

export default function App() {

  const blogEntryElements = data.map((entry) => {
    return (
      <BlogEntry
        //this has to be separated for ordering etc. and has to be called "key"
        key={entry.id}
        //note to self: now I am passing down the whole entry object I need to match up
        //whatever things are called in the entry object with the props names in BlogEntry component
        //i.e. the database you pull from has to have the same field names.
        entry={entry}
      />
    )
  })

  return (
    <>
      <Header />
      <Title />
      <main className="main-content">
        {blogEntryElements}
      </main>
      <Footer />
    </>
  )
}


