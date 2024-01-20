import { ReactNode, RefObject } from "react";
import { About, Books, Contacts } from "../2-pages";

export type RouteType = {
    path: string;
    name: string;
    element: ReactNode;
    nodeRef: RefObject<HTMLDivElement>;
};

export const routes = [
    { path: "/about", element: <About /> },
    { path: "/books", element: <Books /> },
    { path: "/contact", element: <Contacts /> },
];
