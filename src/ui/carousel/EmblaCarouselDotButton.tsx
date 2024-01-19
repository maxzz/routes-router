import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType as CarouselApi } from 'embla-carousel';

type DotButtonProps = PropsWithChildren<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>;

export function DotButton({ children, ...rest }: DotButtonProps) {
    return (
        <button type="button" {...rest}>
            {children}
        </button>
    );
}

type UseDotButtonType = {
    selectedIndex: number;
    scrollSnaps: number[];
    onDotButtonClick: (index: number) => void;
};

export function useDotButton(api: CarouselApi | undefined, onButtonClick?: (api: CarouselApi) => void): UseDotButtonType {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onDotButtonClick = useCallback(
        (index: number) => {
            if (!api) return;
            api.scrollTo(index);
            onButtonClick?.(api);
        },
        [api, onButtonClick]
    );

    const onInit = useCallback((api: CarouselApi) => setScrollSnaps(api.scrollSnapList()), []);
    const onSelect = useCallback((api: CarouselApi) => setSelectedIndex(api.selectedScrollSnap()), []);

    useEffect(
        () => {
            if (!api) return;
            onInit(api);
            onSelect(api);
            api.on('reInit', onInit);
            api.on('reInit', onSelect);
            api.on('select', onSelect);
        }, [api, onInit, onSelect]
    );

    return {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick
    };
}
