import { createBrowserRouter } from "react-router-dom";
import { routes } from "./0-all-routes";
import { Root } from "./1-root";
import { ErrorPage } from "./2-error-page-404";

export const router = createBrowserRouter([{
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: routes,
}]);
