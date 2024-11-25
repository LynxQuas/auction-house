import { Outlet } from "react-router-dom";
import Navigations from "../components/Navigations";

const Root = () => {
    return (
        <div className="flex md:flex-row flex-col gap-10">
            <header>
                <Navigations />
            </header>
            <main className="p-8 flex-grow ">
                <Outlet />
            </main>
        </div>
    );
};

export default Root;
