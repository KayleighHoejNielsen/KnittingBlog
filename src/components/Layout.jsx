import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Title from './Title.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
    return (
        <>
            <Header />
            <Title />
            <Outlet />
            <Footer />
        </>
    )
}
