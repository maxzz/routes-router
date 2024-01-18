import { classNames } from "@/utils/classnames";
import { SVGProps } from "react";

export function IconRoutes({ className, title, ...rest }: SVGProps<SVGSVGElement> & { title?: string; }) {
    return (
        <svg className={classNames(className)} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path d="M11 10H5L3 8l2-2h6V3l1-1 1 1v1h6l2 2-2 2h-6v2h6l2 2-2 2h-6v6a2 2 0 0 1 2 2H9a2 2 0 0 1 2-2z" />
        </svg>
    );
}
