import { Link } from "react-router-dom";

export function HomePage() {
    return (
        <div className="h-full bg-sky-800">
            <Link to="/" className="inline-block ml-4 -mt-1.5 px-3 py-2 text-orange-950 bg-orange-400 hover:text-orange-50 hover:bg-orange-500 border-orange-300 border rounded shadow active:scale-x-[.97] transition-colors">
                Choose a route
            </Link>
        </div>
    );
}
