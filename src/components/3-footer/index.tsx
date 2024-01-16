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

export function Footer({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("pt-1 pb-1.5 text-xs text-slate-600 bg-slate-950 flex items-center justify-center", className)} {...rest}>
            <p>Created by Max Zakharzhevskiy.</p>
            <IconSunnyvale className="w-5 h-5" />
            <p>Open sourced on{' '}
                <a className="border-current border-b border-dotted" href="https://github.com/maxzz/forms-formik" target="_blank" rel="noopener">
                    GitHub.
                </a>
            </p>
        </div>
    );
}