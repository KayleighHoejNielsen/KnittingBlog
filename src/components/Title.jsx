
import data from '../data.js'
import { useLocation, useParams } from 'react-router-dom'

export default function Title() {
    const location = useLocation()
    const { id } = useParams()
    
    function determineTitle() {
        if (location.pathname === "/counter") {
            return "Row Counter"
        } else if (location.pathname === "/") {
            return "Kay's Knitting"
        } else {
            const blog = data.find((item) => item.id.toString() === id)

            if (!blog) {
                return "Kay's Knitting"
            } else {
                return blog.title
            }
        }
    }

    return (
        <div className="title">
            <h1>{determineTitle()}</h1>
        </div>
    )
}