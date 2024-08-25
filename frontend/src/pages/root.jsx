import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar.jsx"

function Root() {
    return (
        <div className="flex flex-row">
            <SideBar />
            <Outlet />
        </div>
    )
}

export default Root