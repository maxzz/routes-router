import { createBrowserRouter } from "react-router-dom";
import { Root } from "./root";
import { About, Books, Contacts } from "../2-pages";
import { ErrorPage } from "../9-error";

const routes = [
    { path: "/about", element: <About /> },
    { path: "/books", element: <Books /> },
    { path: "/contact", element: <Contacts /> },
];

export const router = createBrowserRouter([{
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: routes,
}]);
