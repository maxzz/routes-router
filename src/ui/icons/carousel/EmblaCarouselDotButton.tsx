import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';

type UseDotButtonType = {
    selectedIndex: number;
    scrollSnaps: number[];
    onDotButtonClick: (index: number) => void;
};

export function useDotButton(emblaApi: EmblaCarouselType | undefined, onButtonClick?: (emblaApi: EmblaCarouselType) => void): UseDotButtonType {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onDotButtonClick = useCallback(
        (index: number) => {
            if (!emblaApi) return;
            emblaApi.scrollTo(index);
            onButtonClick?.(emblaApi);
        },
        [emblaApi, onButtonClick]
    );

    const onInit = useCallback((emblaApi: EmblaCarouselType) => setScrollSnaps(emblaApi.scrollSnapList()), []);
    const onSelect = useCallback((emblaApi: EmblaCarouselType) => setSelectedIndex(emblaApi.selectedScrollSnap()), []);

    useEffect(
        () => {
            if (!emblaApi) return;
            onInit(emblaApi);
            onSelect(emblaApi);
            emblaApi.on('reInit', onInit);
            emblaApi.on('reInit', onSelect);
            emblaApi.on('select', onSelect);
        }, [emblaApi, onInit, onSelect]
    );

    return {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick
    };
}

type DotButtonProps = PropsWithChildren<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>;

export function DotButton({ children, ...rest }: DotButtonProps) {
    return (
        <button type="button" {...rest}>
            {children}
        </button>
    );
}
