import { useState, useCallback, useEffect } from 'react';
import { EmblaCarouselType as CarouselApi } from 'embla-carousel';

type UsePrevNextButtons = {
    prevBtnDisabled: boolean;
    nextBtnDisabled: boolean;
    onPrevButtonClick: () => void;
    onNextButtonClick: () => void;
};

export const usePrevNextButtons = (api: CarouselApi | undefined, onButtonClick?: (api: CarouselApi) => void): UsePrevNextButtons => {
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
