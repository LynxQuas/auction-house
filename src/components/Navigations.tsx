import { useState } from "react";
import NavigationLayout from "./NavigationLayout";
import NavMenu from "./NavMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";

const Navigations = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    return (
        <nav>
            {/* Desktop Navigation  */}
            <NavigationLayout className="z-50 md:block hidden sticky top-0 right-0 h-screen w-[18rem]">
                <NavMenu />
            </NavigationLayout>

            {/* Mobile Humberger Menu  */}
            <div className="md:hidden justify-between w-screen  bg-black sticky top-0 right-0 flex p-4 items-center">
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
            </div>

            {/* Mobile Navigation  */}
            {isMobileNavOpen && (
                <NavigationLayout className="z-50 block md:hidden absolute top-0 left-0 w-screen h-screen">
                    <IoMdCloseCircleOutline
                        className="text-white absolute w-10 h-10 top-0 right-0 m-5"
                        onClick={() => setIsMobileNavOpen(false)}
                    />
                    <NavMenu onClose={() => setIsMobileNavOpen(false)} />
                </NavigationLayout>
            )}
        </nav>
    );
};

export default Navigations;
