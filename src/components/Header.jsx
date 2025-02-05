import '../index.css'
import { Link } from 'react-router-dom'

import yarnLogo from '../images/yarnLogo.png'

export default function Header() {
    return (
        <nav className="nav-bar">
            <img src={yarnLogo} alt="logo of a ball of yarn"></img>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Counter">Counter</Link>
                </li>
                <li>
                    <a>Log In</a>
                </li>
            </ul>
        </nav>
    )
}