import image1 from './slide-1.jpg';
import image2 from './slide-2.jpg';
import image3 from './slide-3.jpg';
import image4 from './slide-4.jpg';

export const images: string[] = [image1, image2, image3, image4];

export const imageByIndex = (index: number): string => images[index % images.length];
