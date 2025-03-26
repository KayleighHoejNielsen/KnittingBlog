import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Counter from './pages/Counter.jsx'
import Layout from './components/Layout.jsx'
import BlogArticle from './pages/BlogArticle.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
        </Route>
      </Routes> 
    </BrowserRouter>
  )
}


