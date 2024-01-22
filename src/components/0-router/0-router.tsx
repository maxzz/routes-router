import { createBrowserRouter } from "react-router-dom";
import { routes } from "./0-all-routes";
import { Root } from "./1-root";
import { ErrorPage } from "./3-error-page-404";
import { HomePage } from "./2-home";

export const router = createBrowserRouter([{
    path: "/",
    element: <Root routes={routes} />,
    errorElement: <div className="pt-11  h-screen bg-sky-800"><HomePage /></div>, // errorElement: <ErrorPage />, // a special case to self host on github pages
    children: routes,
}]);
