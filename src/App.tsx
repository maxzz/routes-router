import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./components/0-root";
import { ErrorPage } from "./components/9-error";
import { About, Books, Contacts } from "./components/2-pages";

const router = createBrowserRouter([{
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
        { path: "/about", element: <About /> },
        { path: "/books", element: <Books /> },
        { path: "/contact", element: <Contacts /> },
    ],
}]);

export function App() {
    return (
        <RouterProvider router={router} />
    );
}
