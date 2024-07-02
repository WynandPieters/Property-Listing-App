import { Component } from '@angular/core';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { NavigationButtonsComponent } from './navigation-buttons/navigation-buttons.component';

@Component({
  selector: 'app-homepage-component',
  standalone: true,
  imports: [ImageSliderComponent, NavigationButtonsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
