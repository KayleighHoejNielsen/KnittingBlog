import { NavLink } from 'react-router-dom'

import yarnLogo from '../images/yarnLogo.png'

//future functionality, I want to add a search option. To search for maybe free text titles of blogs
//and or to search for the type of item that is made in the blog
export default function Header() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline"
    }

    return (
        <nav className="nav-bar">
            <img src={yarnLogo} alt="logo of a ball of yarn"></img>
            <ul>
                <li>
                    <NavLink to="/" style={({isActive}) => isActive? activeStyle : null}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/counter" style={({isActive}) => isActive? activeStyle : null}>Counter</NavLink>
                </li>
                <li>
                    <NavLink to="/create" style={({isActive}) => isActive? activeStyle : null}>Create</NavLink>
                </li>
            </ul>
        </nav>
    )
}
