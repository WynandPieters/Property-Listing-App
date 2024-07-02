import { Injectable } from '@angular/core';
import { Image } from '../image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getImages(): Image[] {
    return [
      { src: 'assets/images/sliderImages/House_1.png', alt: 'House 1' },
      { src: 'assets/images/sliderImages/House_2.png', alt: 'House 2' },
      { src: 'assets/images/sliderImages/House_3.png', alt: 'House 3' },
      { src: 'assets/images/sliderImages/House_4.png', alt: 'House 4' },
      { src: 'assets/images/sliderImages/House_5.png', alt: 'House 5' },
      { src: 'assets/images/sliderImages/House_6.png', alt: 'House 6' },
      { src: 'assets/images/sliderImages/House_7.png', alt: 'House 7' },
      { src: 'assets/images/sliderImages/House_8.png', alt: 'House 8' }
    ];
  }
}
