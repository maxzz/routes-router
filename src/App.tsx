import { RouterProvider } from "react-router-dom";
import { router } from "./components/0-routes";

export function App() {
    return (
        <RouterProvider router={router} />
    );
}
