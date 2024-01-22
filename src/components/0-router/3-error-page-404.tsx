import { Link } from "react-router-dom";

export function ErrorPage() {
    return (
        <div className="h-screen bg-sky-800 grid gap-4 place-content-center place-items-center">
            <div className="text-5xl font-bold text-red-600 [-webkit-text-stroke:1.5px_#ff8b8b] blur-[1.5px] drop-shadow">
                404
            </div>

            <div className="text-sky-300">
                Page not found
            </div>

            <Link to="/" className="px-3 py-2 bg-sky-800 hover:bg-sky-700 border-sky-700 border rounded shadow active:scale-[.97]">
                Go back to home
            </Link>
        </div>
    );
}
