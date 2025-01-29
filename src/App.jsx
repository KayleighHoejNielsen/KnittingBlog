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
        img={entry.img}
        title={entry.title}
        date={entry.date}
        text={entry.text}
      />
    )
  })

  return (
    <>
      <Header />
      <Title />
      <div className="main-content">
        {blogEntryElements}
      </div>
      <Footer />
    </>
  )
}


