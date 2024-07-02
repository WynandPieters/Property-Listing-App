import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent implements OnInit, OnDestroy {
   homeImages: string[] = [
  'assets/images/sliderImages/House_1.png',
  'assets/images/sliderImages/House_2.png',
  'assets/images/sliderImages/House_3.png',
  'assets/images/sliderImages/House_4.png',
  'assets/images/sliderImages/House_5.png',
  'assets/images/sliderImages/House_6.png',
  'assets/images/sliderImages/House_7.png',
  'assets/images/sliderImages/House_8.png'
 ];

 currentIndex: number = 0;
 intervalId: any;

 ngOnInit() {
  this.startSlideshow();
 }

 ngOnDestroy() {
  if (this.intervalId) {
    clearInterval(this.intervalId)
  }
 }

 nextImage() {
  this.currentIndex = (this.currentIndex + 1) % this.homeImages.length;
 }

 previousImage() {
  this.currentIndex = (this.currentIndex - 1 + this.homeImages.length) % this.homeImages.length;
 }

 startSlideshow() {
  this.intervalId = setInterval(() => {
    this.nextImage();
  }, 5000)
 }
}

