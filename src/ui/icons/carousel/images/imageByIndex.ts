// https://ui.shadcn.com/docs/components/carousel
// https://www.embla-carousel.com/examples/generator
// https://codesandbox.io/p/sandbox/embla-carousel-generator-react-forked-l7cf67

import image1 from './slide-1.jpg';
import image2 from './slide-2.jpg';
import image3 from './slide-3-corlieu-falls-710w.jpg'; // https://www.yosemitehikes.com/toys/wallpaper/corlieu-falls.htm
import image4 from './slide-4-tuolumne-meadows-lembert-dome-710w.jpg';

export const images: string[] = [image1, image2, image3, image4];

export const imageByIndex = (index: number): string => images[index % images.length];
