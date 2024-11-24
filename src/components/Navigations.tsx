import { useState } from "react";
import NavigationLayout from "./NavigationLayout";
import NavMenu from "./NavMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Navigations = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    return (
        <nav>
            {/* Desktop Navigation  */}
            <NavigationLayout className="z-50 md:block hidden sticky top-0 right-0 h-screen w-[18rem]">
                <NavMenu />
            </NavigationLayout>

            {/* Mobile Humberger Menu  */}
            <div
                onClick={() => setIsMobileNavOpen(true)}
                className="md:hidden  w-10 h-10 bg-black sticky top-0 right-0 flex rounded-full justify-center items-center"
            >
                <GiHamburgerMenu size={20} className="text-white" />
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
