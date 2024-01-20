import { createBrowserRouter } from "react-router-dom";
import { Root } from "../0-root";
import { About, Books, Contacts } from "../2-pages";
import { ErrorPage } from "../9-error";

export const router = createBrowserRouter([{
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
        { path: "/about", element: <About /> },
        { path: "/books", element: <Books /> },
        { path: "/contact", element: <Contacts /> },
    ],
}]);
