import { Outlet } from "react-router-dom";
import Navigations from "../components/Navigations";

const Root = () => {
    return (
        <div className="flex md:flex-row flex-col ">
            <header>
                <Navigations />
            </header>
            <main className="mt-[4rem] md:mt-[0rem] flex-grow bg-[#eee] min-h-screen md:w-[70%] md:ml-[18rem]">
                <Outlet />
            </main>
        </div>
    );
};

export default Root;
