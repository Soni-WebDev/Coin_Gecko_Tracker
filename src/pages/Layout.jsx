import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";

function MainLayout() {
    return (
        <>
            <Navbar />  {/**this navbar is the shared UI, we want to share across pages */}
            <Outlet /> {/**the actual page which will be rendered along with navbar */}
        </>
    )
}

export default MainLayout;