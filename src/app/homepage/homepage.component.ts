import { Component } from '@angular/core';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { NavigationButtonsComponent } from './navigation-buttons/navigation-buttons.component';
import { EmailFormComponent } from "./email-form/email-form.component";

@Component({
    selector: 'app-homepage-component',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
    imports: [ImageSliderComponent, NavigationButtonsComponent, EmailFormComponent]
})
export class HomepageComponent {

}
