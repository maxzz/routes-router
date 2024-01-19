import React, { useCallback } from 'react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import Autoplay from 'embla-carousel-autoplay';
import { imageByIndex } from './images/imageByIndex';
import "./css/embla.css";

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
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">
                                <span>{index + 1}</span>
                            </div>
                            <img
                                className="embla__slide__img"
                                src={imageByIndex(index)}
                                alt="Your alt text" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__buttons">
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>

            <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')} />
                ))}
            </div>
        </div>
    );
}

export default EmblaCarousel;
