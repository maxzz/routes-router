import { CatouselOptions, EmblaCarousel } from "@/ui/carousel";
import { Link } from "react-router-dom";
import { allImages } from "./images/imageByIndex";

export function About() {
    return (
        <div className="p-4 h-full bg-slate-500 grid grid-rows-[auto,1fr]">
            <div className="flex items-center justify-between">
                About
                <Link to="/" className="px-3 py-2 border-slate-700/50 border rounded">Back</Link>
            </div>

            <EmblaCarousel slides={allImages} options={{ loop: true }} />
        </div>
    );
}
