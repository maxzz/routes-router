import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/ui/carousel/EmblaCarousel";
import { Link } from "react-router-dom";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export function About() {
    return (
        <div className="px-4 h-full bg-slate-500 flex items-center justify-between">
            <div className="">
                About
                <Link to="/">Back</Link>

                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
        </div>
    );
}
