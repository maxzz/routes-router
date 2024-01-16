import { Link } from "react-router-dom";

export function About() {
    return (
        <div className="px-4 h-full bg-slate-500 flex items-center justify-between">
            <div className="">
            About
            <Link to="/">Back</Link>

            </div>
        </div>
    );
}
