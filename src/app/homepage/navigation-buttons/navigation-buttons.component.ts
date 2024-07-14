import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-buttons.component.html',
  styleUrl: './navigation-buttons.component.css'
})
export class NavigationButtonsComponent {

  constructor(private router: Router) {}

  onHomeClick() {
    this.router.navigate(['/home'])
  }

  onSalesClick() {
    this.router.navigate(['/properties-for-sale'])
  }

  onRentalsClick() {
    this.router.navigate(['/rentals'])
  }

  onWishlistClick() {
    this.router.navigate(['/wishlist'])
  }

  onAboutUsClick() {
    this.router.navigate(['/about-us'])
  }

  onContactUsClick() {
    this.router.navigate(['/contact-us'])
  }
}
