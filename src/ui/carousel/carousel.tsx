import { HTMLAttributes, useCallback } from 'react';
import { EmblaOptionsType, EmblaCarouselType as CarouselApi } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay, { AutoplayType } from 'embla-carousel-autoplay';
import { useDotButton } from './carousel-use-dots';
import { usePrevNextButtons } from './carousel-use-prev-next';
import { IconPrev, IconNext } from '../icons';
import { classNames } from '@/utils/classnames';

type CarouselProps = {
    slides: string[];
    options?: EmblaOptionsType;
};

export function Carousel({ slides, options, className, ...rest }: CarouselProps & HTMLAttributes<HTMLDivElement>) {
    const [emblaRef, api] = useEmblaCarousel(options, [Autoplay({ stopOnInteraction: false, delay: 5000 })]);

    const onButtonClick = useCallback(
        (api: CarouselApi) => {
            const { autoplay } = api.plugins() as AutoplayType;
            if (autoplay?.options.stopOnInteraction) {
                autoplay.stop();
            }
        }, []
    );

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api, onButtonClick);
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(api, onButtonClick);

    return (
        <div className={classNames("relative h-[var(--slide-height)] [--slide-spacing:1rem] [--slide-size:100%] [--slide-height:19rem] text-gray-400/70", className)} {...rest}>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="ml-[calc(var(--slide-spacing)*-1)] flex [backface-visibility:hidden] [touch-action:pan-y]">
                    {slides.map((imgSrc, index) => (
                        <div className="relative pl-[var(--slide-spacing)] min-w-0 [flex:_0_0_var(--slide-size)]" key={index}>

                            <div className="absolute right-4 top-4 w-12 h-12 leading-[2.8rem] font-extrabold text-center bg-gray-300/30 rounded-full">
                                <span>{index + 1}</span>
                            </div>

                            <img
                                className="block w-full h-[var(--slide-height)] object-cover"
                                src={imageUrlByIndex(slides, index)}
                                alt="Your alt text"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center">
                <button onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
                    <IconPrev className="w-8 h-8 fill-current" />
                </button>
                <button onClick={onNextButtonClick} disabled={nextBtnDisabled}>
                    <IconNext className="w-8 h-8 fill-current" />
                </button>
            </div>

            <div className="absolute left-0 right-0 -bottom-4 text-red-500 flex items-center justify-center gap-x-1 z-10">
                {scrollSnaps.map((_, index) => (
                    <button
                        className={classNames(
                            'w-6 h-1 inline-flex items-center rounded',
                            index === selectedIndex ? 'bg-sky-500' : 'bg-sky-100'
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

// import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren, useCallback } from 'react';
// type ButtonProps = PropsWithChildren<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>;
// export function NavButton({ children, ...rest }: ButtonProps) {
//     return (
//         <button type="button" {...rest}>
//             {children}
//         </button>
//     );
// }
