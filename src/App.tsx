import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./components/1-root";
import { ErrorPage } from "./components/2-error";

const router = createBrowserRouter([{
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
}]);

export function App() {
    return (
        <RouterProvider router={router} />
    );
}
