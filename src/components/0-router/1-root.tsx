import { useLocation, useOutlet } from "react-router-dom";
import { SwitchTransition, CSSTransition, TransitionStatus } from "react-transition-group";
import { Header } from "../1-header";
import { RouteType } from "./0-all-routes";
import "./transitions-page.css";
import { Footer } from "../3-footer";

function AnimatedOutlet({ routes }: { routes: RouteType[]; }) {
    const currentOutlet = useOutlet();
    const location = useLocation();
    const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {};
    return (
        <SwitchTransition mode="out-in">
            <CSSTransition
                key={location.pathname}
                nodeRef={nodeRef}
                //timeout={100} //timeout={300}
                timeout={{
                    appear: 300,
                    enter: 200,
                    exit: 100,
                }}
                classNames="fade"
                unmountOnExit
            >
                {(state: TransitionStatus) => (
                    <div ref={nodeRef} className="page">
                        {traceState(location.pathname, state)}

                        {currentOutlet}
                    </div>
                )}
            </CSSTransition>
        </SwitchTransition>
    );
}

function traceState(path: string, state: string): undefined {
    const color =
        state === 'exiting'
            ? 'darkcyan'
            : state === 'exited'
                ? 'cyan'
                : state === 'entering'
                    ? 'saddlebrown'
                    : state === 'entered'
                        ? 'chocolate'
                        : 'black';
    console.log(`page: "${path}" %c${state}`, `background-color: #252525; color: ${color}`);
}

export function Root({ routes }: { routes: RouteType[]; }) {
    const currentOutlet = useOutlet();
    return (
        <div className="h-screen bg-sky-800">
            <div className="w-full h-full grid grid-rows-[auto,1fr]">
                <Header />
                <div className="relative">
                    <AnimatedOutlet routes={routes} />
                    {/* <Outlet /> */}
                </div>
                <Footer />
            </div>
        </div>
    );
}
