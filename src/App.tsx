import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreatingListings from "./create-listings/CreatingListings";

const App = () => {
    const router = createBrowserRouter([
        {
            element: <Root />,
            children: [
                { path: "/", element: <h1>Home Page</h1> },
                {
                    path: "/active-listings",
                    element: <h1>Active Listings Page</h1>,
                },
                { path: "/categories", element: <h1>Categories Page</h1> },
                { path: "/wishlist", element: <h1>WishList Page</h1> },
                {
                    path: "/create-listings",
                    element: <CreatingListings />,
                },
                { path: "/profile", element: <h1>Profile Page</h1> },
                { path: "/login", element: <LoginPage /> },
                { path: "/register", element: <RegisterPage /> },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};
export default App;
