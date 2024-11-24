import { CiLogin } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { navMenu } from "../constants";

const NavMenu = ({ onClose }: { onClose?: () => void }) => {
    return (
        <div className="flex flex-col justify-between  bg-black text-white h-full p-8">
            <ul className="flex flex-col gap-6">
                <h1 className="mb-4 text-2xl font-bold">🏠Auction House</h1>
                {navMenu.map((menu) => (
                    <li key={menu.url}>
                        <NavLink
                            onClick={onClose}
                            to={menu.url}
                            className={({ isActive }) => {
                                return `hover:bg-gray-800 py-2 px-4 cursor-pointer block ${
                                    isActive ? "bg-gray-800" : ""
                                }`;
                            }}
                        >
                            {menu.label}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Side navigation  */}

            <ul className="flex flex-col gap-4">
                <li onClick={onClose}>
                    <Link to="/profile">
                        <FaRegCircleUser
                            className="text-white inline mx-2"
                            size={25}
                        />
                        Profile
                    </Link>
                </li>
                <li onClick={onClose}>
                    <Link to="/login">
                        <CiLogin className="text-white inline mx-2" size={25} />
                        Login
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavMenu;
