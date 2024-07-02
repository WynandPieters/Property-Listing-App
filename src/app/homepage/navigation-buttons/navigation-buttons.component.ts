import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-buttons',
  standalone: true,
  imports: [],
  templateUrl: './navigation-buttons.component.html',
  styleUrl: './navigation-buttons.component.css'
})
export class NavigationButtonsComponent {

  onHomeClick() {
    console.log('You clicked the Home button!')
  }

  onSalesClick() {
    console.log('You clicked the Sales button!')
  }

  onRentalsClick() {
    console.log('You clicked the Rentals button!')
  }
}
