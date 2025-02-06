import '../index.css'
import { useLocation } from 'react-router-dom'

export default function Title() {

    const DynamicTitle = () => {
        const location = useLocation()

        const getTitle = (pathname) => {
            switch (pathname) {
                case "/Counter":
                    return "Row Counter";
                default: "Kay's Knitting";
            }
        }
    
    return <h1>{getTitle(location.pathname)}</h1>
    }

    return (
        <div className="title">
            <DynamicTitle />
        </div>
    )
}