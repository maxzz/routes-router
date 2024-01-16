import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./components/0-root";
import { ErrorPage } from "./components/9-error";

const router = createBrowserRouter([{
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
        { path: "/about", element: <div>About</div> },
        { path: "/contact", element: <div>Contact</div> },
    ],
}]);

export function App() {
    return (
        <RouterProvider router={router} />
    );
}
