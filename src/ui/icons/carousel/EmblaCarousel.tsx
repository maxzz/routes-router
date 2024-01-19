import { useCallback } from 'react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import { imageByIndex } from './images/imageByIndex';

//import "./css/base.css";
import "./css/embla.css";
import { classNames } from '@/utils/classnames';
// import "./css/sandbox.css";

type EmblaCarouselProps = {
    slides: number[];
    options?: EmblaOptionsType;
};

function EmblaCarousel({ slides, options }: EmblaCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

    const onButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const { autoplay } = emblaApi.plugins() as any;
        if (!autoplay) {
            return;
        }
        if (autoplay.options.stopOnInteraction !== false) {
            autoplay.stop();
        }
    }, []);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
        emblaApi,
        onButtonClick
    );

    const {
        prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick
    } = usePrevNextButtons(emblaApi, onButtonClick);

    return (
        <div className="relative p-6 [--slide-spacing:1rem] [--slide-size:100%] [--slide-height:19rem] text-gray-400/70"> {/* embla */}
            <div className="overflow-hidden" ref={emblaRef}> {/* embla__viewport */}
                <div className="ml-[calc(var(--slide-spacing)*-1)] flex [backface-visibility:hidden] [touch-action:pan-y]"> {/* embla__container */}
                    {slides.map((index) => (
                        <div className="relative pl-[var(--slide-spacing)] min-w-0 [flex:_0_0_var(--slide-size)]" key={index}> {/* embla__slide */}
                            <div className="absolute right-4 top-4 w-12 h-12 leading-[2.8rem] font-extrabold text-center bg-gray-300/30 rounded-full"> {/* embla__slide__number */}
                                <span>{index + 1}</span>
                            </div>
                            <img
                                className="block w-full h-[var(--slide-height)] object-cover" // embla__slide__img
                                src={imageByIndex(index)}
                                alt="Your alt text"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center"> {/* embla__buttons */}
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>

            <div className="absolute left-0 right-0 bottom-6 text-red-500 flex items-center justify-center z-10"> {/* embla__dots */}
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        className={classNames(
                            'embla__dot',
                            index === selectedIndex ? ' embla__dot--selected' : ''
                        )}
                        // className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
                        onClick={() => onDotButtonClick(index)}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}

export default EmblaCarousel;
