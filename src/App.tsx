import { RouterProvider } from "react-router-dom";
import { router } from "./components/0-router";

export function App() {
    return (
        <RouterProvider router={router} />
    );
}
