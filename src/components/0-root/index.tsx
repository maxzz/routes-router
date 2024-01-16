import { Outlet } from "react-router-dom";
import { Header } from "../1-header";

export function Root() {
    return (
        <div className="h-screen bg-sky-300">
            <div className="">
                <Header />
                <Outlet />
            </div>
        </div>
    );
}
