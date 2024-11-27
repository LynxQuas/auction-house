import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";

import NavMenu from "./NavMenu";
import NavigationLayout from "./NavigationLayout";

const Navigations = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    return (
        <>
            {/* Desktop Navigation  */}
            <NavigationLayout className="z-50  md:block hidden fixed left-0 bottom-0 top-0 min-h-screen w-[18rem]">
                <NavMenu />
            </NavigationLayout>

            {/* Mobile Navigation  */}
            <nav className="md:hidden bg-black fixed top-0 w-screen text-white flex justify-between py-4 px-8 items-center">
                <GiHamburgerMenu
                    size={30}
                    className="text-white"
                    onClick={() => setIsMobileNavOpen(true)}
                />
                <div className="relative ">
                    <div className="absolute mx-3 my-[-0.5rem] bg-red-500 text-white w-5 h-5 flex justify-center items-center text-xs rounded-full">
                        <span>1</span>
                    </div>
                    <IoMdNotifications className="text-white" size={25} />
                </div>
            </nav>

            {/* Mobile Navigation Menu  */}
            {isMobileNavOpen && (
                <NavigationLayout className="z-50 block md:hidden fixed top-0 left-0 w-screen h-screen">
                    <IoMdCloseCircleOutline
                        className="text-white absolute w-10 h-10 top-0 right-0 m-5"
                        onClick={() => setIsMobileNavOpen(false)}
                    />
                    <NavMenu onClose={() => setIsMobileNavOpen(false)} />
                </NavigationLayout>
            )}
        </>
    );
};

export default Navigations;
