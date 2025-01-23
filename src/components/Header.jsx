import '../index.css'

import yarnLogo from './images/yarnLogo.png'

export default function Header() {
    return (
        <div className="nav-bar">
            <img src={yarnLogo} alt="logo of a ball of yarn"></img>
            <a>Counter</a>
            <a>Log In</a>
        </div>
    )
}