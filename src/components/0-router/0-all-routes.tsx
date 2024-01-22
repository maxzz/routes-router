import { ReactNode, RefObject, createRef } from "react";
import { About, Books, Contacts } from "../2-pages";
import { HomePage } from "./2-home";

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
        element: <HomePage />,
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
