import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreatingListings from "./features/create-listings/CreatingListings";
import ActiveListingsPage from "./features/active-listings/ActiveListingsPage";
import ListingDetails from "./features/listing-details/ListingDetails";

const App = () => {
    const router = createBrowserRouter([
        {
            element: <Root />,
            children: [
                { path: "/", element: <h1>Home Page</h1> },
                {
                    path: "/active-listings",
                    element: <ActiveListingsPage />,
                },
                { path: "/active-listings/:id", element: <ListingDetails /> },
                { path: "/categories", element: <h1>Categories Page</h1> },
                { path: "/wishlist", element: <h1>WishList Page</h1> },
                {
                    path: "/create-listings",
                    element: <CreatingListings />,
                },
                { path: "/profile", element: <h1>Profile page </h1> },
                {
                    path: "/notifications",
                    element: <h1>Notifications Page</h1>,
                },
                { path: "/login", element: <LoginPage /> },
                { path: "/register", element: <RegisterPage /> },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};
export default App;
