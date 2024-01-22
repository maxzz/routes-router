import { Link } from "react-router-dom";

const linkClasses = "\
inline-block \
ml-4 -mt-1.5 px-3 py-2 \
text-orange-950 \
bg-orange-400 \
hover:text-orange-50 \
hover:bg-orange-500 \
border-orange-300 \
border rounded shadow \
active:scale-x-[.97] \
transition-colors";

const anchorClasses = "\
border-transparent border-dotted \
border-b \
hover:border-current \
";

const isDev = process.env.NODE_ENV === "development";

export function HomePage() {
    return (
        <div className="h-full bg-sky-800 flex flex-col">
            <div className="flex-1">
                <Link to="/" className={linkClasses}>
                    Choose a route
                </Link>
            </div>
            <div className="px-4 py-3 text-sm text-sky-400 flex gap-4">
                <a className={anchorClasses} href={isDev ? "/" : "https://maxzz.github.io/routes-router/"}>./routes-router</a>
                <a className={anchorClasses} href="https://github.com/maxzz/routes-router" target="blank" referrerPolicy="no-referrer">source code</a>
            </div>
        </div>
    );
}
