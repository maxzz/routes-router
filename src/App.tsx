import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([{
    path: "/",
    element: <div className="h-screen bg-sky-300">123</div>,
    errorElement: <div>404</div>,
}]);

export function App() {
    return (
        <RouterProvider router={router} />
    );
}
