import React, { HTMLAttributes } from 'react';
import { classNames } from '@/utils/classnames';
import { IconSunnyvale } from '@/ui/icons';

// export function Footer() {
//     return (
//         <footer className="px-1 py-0.5 text-[0.5rem] text-end text-orange-500 bg-slate-900">
//             max
//         </footer>
//     );
// }

const anchorClasses = "\
border-transparent border-dotted \
border-b \
hover:border-current \
";

const isDev = process.env.NODE_ENV === "development";

export function Footer({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("pt-1 pb-1.5 text-xs text-slate-600 bg-slate-950 flex items-center justify-center", className)} {...rest}>
            <p>Created by Max Zakharzhevskiy.</p>
            <IconSunnyvale className="w-5 h-5" />
            <p>Open sourced on{' '}
                <a className="border-current border-b border-dotted" href="https://github.com/maxzz/routes-router" target="_blank" rel="noopener" referrerPolicy="no-referrer">
                    GitHub.
                </a>
            </p>

            <div className="px-4 py-3 text-xs text-sky-300/50 flex gap-4">
                <a className={anchorClasses} href={isDev ? "/" : "https://maxzz.github.io/routes-router/"}>./routes-router</a>
                <a className={anchorClasses} href="https://github.com/maxzz/routes-router" target="_blank" referrerPolicy="no-referrer" rel="noopener">source code</a>
            </div>

        </div>
    );
}