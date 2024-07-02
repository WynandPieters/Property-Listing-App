import { Component } from '@angular/core';
import { ImageSliderComponent } from './image-slider/image-slider.component';

@Component({
  selector: 'app-homepage-component',
  standalone: true,
  imports: [ImageSliderComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
