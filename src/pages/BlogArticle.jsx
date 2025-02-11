import data from '../data.js'
import { useParams, Link } from 'react-router-dom'

export default function BlogArticle() {
    //note to self: this is not taking the id from the data.js file. But it is taking whatever comes 
    //after the : in my route path. 
    const params = useParams()

    return (
        <>
            <h1>full blog article goes here</h1>
            <Link to=".." relative="path">Back to Main</Link>
        </>
    )
}