import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./components/0-root";
import { ErrorPage } from "./components/9-error";

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
