import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
    return (
        <div className="flex  gap-10">
            <header>
                <Navbar />
            </header>
            <main className="p-8 w-[80%]">
                <Outlet />
            </main>
        </div>
    );
};

export default Root;
