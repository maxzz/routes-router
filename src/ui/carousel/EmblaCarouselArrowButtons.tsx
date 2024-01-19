import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType as CarouselApi } from 'embla-carousel';
import { IconNext, IconPrev } from '../icons';

type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean;
    nextBtnDisabled: boolean;
    onPrevButtonClick: () => void;
    onNextButtonClick: () => void;
};

export const usePrevNextButtons = (api: CarouselApi | undefined, onButtonClick?: (api: CarouselApi) => void): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onPrevButtonClick = useCallback(
        () => {
            if (!api) return;
            api.scrollPrev();
            onButtonClick?.(api);
        }, [api, onButtonClick]
    );

    const onNextButtonClick = useCallback(
        () => {
            if (!api) return;
            api.scrollNext();
            onButtonClick?.(api);
        }, [api, onButtonClick]
    );

    const onSelect = useCallback(
        (api: CarouselApi) => {
            setPrevBtnDisabled(!api.canScrollPrev());
            setNextBtnDisabled(!api.canScrollNext());
        }, []
    );

    useEffect(
        () => {
            if (!api) return;
            onSelect(api);
            api.on('reInit', onSelect);
            api.on('select', onSelect);
        }, [api, onSelect]
    );

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    };
};

type ButtonProps = PropsWithChildren<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>;

export function PrevButton({ children, ...rest }: ButtonProps) {
    return (
        <button className="" type="button" {...rest}> {/* embla__button embla__button--prev */}
            <IconPrev className="w-8 h-8 fill-current" /> {/* "embla__button__svg" */}
            {children}
        </button>
    );
}

export function NextButton({ children, ...restProps }: ButtonProps) {
    return (
        <button className="" type="button" {...restProps}> {/* embla__button embla__button--next */}
            <IconNext className="w-8 h-8 fill-current" /> {/* "embla__button__svg" */}
            {children}
        </button>
    );
}
