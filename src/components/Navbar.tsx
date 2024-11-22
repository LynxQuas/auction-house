import { Link, NavLink } from "react-router-dom";

const navMenu = [
    { url: "/", label: "Home" },
    { url: "/active-listings", label: "Active Listings" },
    { url: "/categories", label: "Categories" },
    { url: "/wishlist", label: "Wishlists" },
    { url: "/create-listings", label: "Create-Listing" },
];

const Navbar = () => {
    return (
        <nav className="hidden md:flex flex-col justify-between min-h-screen bg-black p-8 text-white">
            {/* Main Navigation  */}
            <ul className="flex flex-col gap-6">
                <h1 className="mb-4 text-2xl font-bold">Auction House</h1>
                {navMenu.map((menu) => (
                    <li key={menu.url}>
                        <NavLink
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
            <div>
                <ul className="flex flex-col gap-4">
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
