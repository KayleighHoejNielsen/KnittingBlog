import '../index.css'
import { Link } from 'react-router-dom'

import yarnLogo from '../images/yarnLogo.png'

//future functionality, I want to add a search option. To search for maybe free text titles of blogs
//and or to search for the type of item that is made in the blog
export default function Header() {
    return (
        <nav className="nav-bar">
            <img src={yarnLogo} alt="logo of a ball of yarn"></img>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
                <li>
                    <a>Log In</a>
                </li>
            </ul>
        </nav>
    )
}