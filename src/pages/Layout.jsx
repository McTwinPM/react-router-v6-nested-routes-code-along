import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <Outlet />
        </>
    )
}

export default Layout
