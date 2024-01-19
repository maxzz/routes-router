import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/ui/icons/carousel/EmblaCarousel";
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

                <section className="sandbox__carousel">
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                </section>

            </div>
        </div>
    );
}
