import { HTMLAttributes } from 'react';
import { classNames } from '@/utils/classnames';
import { Link, useLocation } from 'react-router-dom';

export function Header({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    const loc = useLocation();
    return (
        <div className={classNames("px-4 py-2 text-sky-500 bg-sky-400/50 border-sky-400 border-b shadow flex items-center justify-between", className)} {...rest}>
            <div className="">Logo</div>

            <div className="flex gap-2">
                <Link to="/about" className={classNames(loc.pathname === "/about" && "text-sky-200")}>About</Link>
                <Link to="/books" className={classNames(loc.pathname === "/books" && "text-sky-200")}>Books</Link>
                <Link to="/contact" className={classNames(loc.pathname === "/contact" && "text-sky-200")}>Contact</Link>
            </div>
        </div>
    );
}
