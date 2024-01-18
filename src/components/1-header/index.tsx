import { HTMLAttributes } from 'react';
import { classNames } from '@/utils/classnames';
import { Link, useLocation } from 'react-router-dom';
import { IconRoutes } from '@/ui/icons';

const linkClasses = (active: boolean) => classNames(
    "px-1 py-2  hover:text-sky-200 hover:bg-sky-400 transition-colors duration-200 ease-in-out",
    active ? "text-sky-50" : "text-sky-600"
);

export function Header({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    const loc = useLocation();
    return (
        <div className={classNames("px-4 font-semibold text-sky-500 bg-sky-400/50 border-sky-400 border-b shadow flex items-center justify-between", className)} {...rest}>
            <div className="text-sky-400 flex items-center">
                <IconRoutes className="w-6 h-6 fill-current stroke-sky-500 strike-[2]" />
                <div className="[-webkit-text-stroke:1px_#0ea5e9]">Routes</div>
            </div>

            <div className="flex gap-2">
                <Link to="/about" className={classNames(linkClasses(loc.pathname === "/about"))}>About</Link>
                <Link to="/books" className={classNames(linkClasses(loc.pathname === "/books"))}>Books</Link>
                <Link to="/contact" className={classNames(linkClasses(loc.pathname === "/contact"))}>Contact</Link>
            </div>
        </div >
    );
}
