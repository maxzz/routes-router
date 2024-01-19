import { CatouselOptions, EmblaCarousel } from "@/ui/carousel";
import { Link } from "react-router-dom";
import { allImages } from "./images/imageByIndex";

const OPTIONS: CatouselOptions = { loop: true };
const SLIDE_COUNT = 4;

export function About() {
    return (
        <div className="px-4 h-full bg-slate-500 flex items-center justify-between">
            <div className="">
                About
                <Link to="/">Back</Link>

                <EmblaCarousel slides={allImages} options={OPTIONS} />
            </div>
        </div>
    );
}
