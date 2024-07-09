import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/images/aboutImages/House_1.webp',
    'assets/images/aboutImages/House_2.jpg',
    'assets/images/aboutImages/House_3.jpeg',
    'assets/images/aboutImages/House_4.webp',
    'assets/images/aboutImages/House_5.jpg',
    'assets/images/aboutImages/House_6.webp',
    'assets/images/aboutImages/House_7.jpg',
    'assets/images/aboutImages/House_8.webp',
  ];
  currentIndex: number = 0;
  intervalId: any;

  ngOnInit(): void {
    this.changeBackgroundImage();
    this.intervalId = setInterval(() => this.changeBackgroundImage(), 5000); // Change image every 5 seconds
  }

  changeBackgroundImage(): void {
    const container = document.getElementById('about-us-container');
    if (container) {
      container.style.backgroundImage = 'url(' + this.images[this.currentIndex] + ')';
    }
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}