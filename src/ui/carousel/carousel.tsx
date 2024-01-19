import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren, useCallback } from 'react';
import { EmblaOptionsType, EmblaCarouselType as CarouselApi } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay, { AutoplayType } from 'embla-carousel-autoplay';
import { classNames } from '@/utils/classnames';
import { useDotButton } from './carousel-use-dots';
import { usePrevNextButtons } from './carousel-use-prev-next';
import { IconPrev, IconNext } from '../icons';

type EmblaCarouselProps = {
    slides: string[];
    options?: EmblaOptionsType;
};

export function EmblaCarousel({ slides, options }: EmblaCarouselProps) {
    const [emblaRef, api] = useEmblaCarousel(options, [Autoplay({ stopOnInteraction: true, delay: 25000 })]);

    const onButtonClick = useCallback((api: CarouselApi) => {
        const { autoplay } = api.plugins() as AutoplayType;
        if (autoplay?.options.stopOnInteraction) {
            autoplay.stop();
        }
    }, []);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api, onButtonClick);
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(api, onButtonClick);

    return (
        <div className="relative p-6 [--slide-spacing:1rem] [--slide-size:100%] [--slide-height:19rem] text-gray-400/70"> {/* embla */}
            <div className="overflow-hidden" ref={emblaRef}> {/* embla__viewport */}
                <div className="ml-[calc(var(--slide-spacing)*-1)] flex [backface-visibility:hidden] [touch-action:pan-y]"> {/* embla__container */}
                    {slides.map((imgSrc, index) => (
                        <div className="relative pl-[var(--slide-spacing)] min-w-0 [flex:_0_0_var(--slide-size)]" key={index}> {/* embla__slide */}
                            <div className="absolute right-4 top-4 w-12 h-12 leading-[2.8rem] font-extrabold text-center bg-gray-300/30 rounded-full"> {/* embla__slide__number */}
                                <span>{index + 1}</span>
                            </div>
                            <img
                                className="block w-full h-[var(--slide-height)] object-cover" // embla__slide__img
                                src={imageUrlByIndex(slides, index)}
                                alt="Your alt text"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center"> {/* embla__buttons */}
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
                    <IconPrev className="w-8 h-8 fill-current" /> {/* "embla__button__svg" */}
                </PrevButton>
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}>
                    <IconNext className="w-8 h-8 fill-current" /> {/* "embla__button__svg" */}
                </NextButton>
            </div>

            <div className="absolute left-0 right-0 bottom-8 text-red-500 flex items-center justify-center gap-x-1 z-10"> {/* embla__dots */}
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        className={classNames(
                            'w-6 h-1 inline-flex items-center rounded', // 'embla__dot'
                            index === selectedIndex ? 'bg-sky-500' : 'bg-sky-100' // 'embla__dot--selected'
                        )}
                        onClick={() => onDotButtonClick(index)}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}

export function imageUrlByIndex<T>(arr: T[], idx: number): T {
    return arr[idx % arr.length];
}

type ButtonProps = PropsWithChildren<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>;

export function PrevButton({ children, ...rest }: ButtonProps) {
    return (
        <button className="" type="button" {...rest}> {/* embla__button embla__button--prev */}
            {children}
        </button>
    );
}

export function NextButton({ children, ...restProps }: ButtonProps) {
    return (
        <button className="" type="button" {...restProps}> {/* embla__button embla__button--next */}
            {children}
        </button>
    );
}

type DotButtonProps = PropsWithChildren<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>;

export function DotButton({ children, ...rest }: DotButtonProps) {
    return (
        <button type="button" {...rest}>
            {children}
        </button>
    );
}
