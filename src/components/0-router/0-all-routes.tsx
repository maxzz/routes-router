import { ReactNode, RefObject, createRef } from "react";
import { About, Books, Contacts } from "../2-pages";

export type RouteTypeWithTransition = {
    name: string;
    nodeRef: RefObject<HTMLDivElement>;
};

export type RouteType = Prettify<
    & {
        path: string;
        element: ReactNode;
    }
    & RouteTypeWithTransition
>;

export const routes: RouteType[] = [
    {
        name: "home",
        path: "/",
        element: <div className="h-full bg-sky-200">Home</div>,
        nodeRef: createRef(),
    },
    {
        name: "about",
        path: "/about",
        element: <About />,
        nodeRef: createRef(),
    },
    {
        name: "books",
        path: "/books",
        element: <Books />,
        nodeRef: createRef(),
    },
    {
        name: "contact",
        path: "/contact",
        element: <Contacts />,
        nodeRef: createRef(),
    },
];
