import { Outlet } from "react-router-dom";
import { Header } from "../1-header";

export function Root() {
    return (
        <div className="h-screen bg-sky-300">
            <div className="w-full h-full grid grid-rows-[auto,1fr]">
                <Header />
                <div className="bg-sky-200">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
