import { Link } from "react-router-dom";

export function Contacts() {
    return (
        <div className="p-4 h-full bg-sky-800 grid grid-rows-[auto,1fr]">
            <div className="flex items-center justify-between">
                <div className="font-semibold text-sky-950 drop-shadow">
                    Route: Contacts
                </div>

                <Link to="/" className="px-3 py-2 bg-sky-800 hover:bg-sky-700 border-sky-700 border rounded shadow active:scale-[.97]">
                    Back
                </Link>
            </div>
        </div >
    );
}
