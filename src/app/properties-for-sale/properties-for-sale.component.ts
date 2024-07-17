import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Property } from './propertiesModel';
import { properties } from './propertiesData';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/AuthService.service';

@Component({
  selector: 'app-properties-for-sale',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './properties-for-sale.component.html',
  styleUrl: './properties-for-sale.component.css'
})
export class PropertiesForSaleComponent implements OnInit, AfterViewInit {
  properties: Property[] = properties;
  currentPropertyImages: HTMLImageElement[] = [];
  currentImageIndex = 0;
  username: string | null = null;
  // url = 'http://localhost:5000/api/v1/retrievedata';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.username = this.authService.getUsername();
    console.log('User logged in', this.username)
    this.fetchData('http://localhost:5000/api/v1/retrievedata');
  }

  ngAfterViewInit(): void {
    document.getElementById('applyFilters')?.addEventListener('click', () => this.applyFilters());
  }

  async fetchData(url: string): Promise<void> {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      //this.displayProperties(data);
      console.log('PROPERTY DATA', data)
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }

//   displayProperties(data: any): void {
//     function displayProperties(data: any) {
//       console.log('DATA', data)
//     const container = document.getElementById('properties-container');

//     Object.keys(data).forEach(key => {
//         const property = data[key];

//         // Create the container
//         const propertyContainer = document.createElement('div');
//         propertyContainer.style.border = '1px solid black';
//         propertyContainer.style.margin = '10px';
//         propertyContainer.style.padding = '10px';
    
//         // Create and store the info from the json package
//         // this will do so for each property entry
//         const propertyInfo = document.createElement('div');
//         propertyInfo.innerHTML = `
//             <p>Property Name: ${property.property_name}</p>
//             <p>Address: ${property.address}</p>
//             <p>Price: ${property.price}</p>
//             <p>Type: ${property.type}</p>
//             <p>Bedrooms: ${property.bedroom}</p>
//             <p>Bathrooms: ${property.bathroom}</p>
//             <p>Total Floors: ${property.total_floors}</p>
//             <p>Garden: ${property.garden}</p>
//             <p>Power: ${property.power}</p>
//             <p>Description: ${property.description}</p>
//         `;
//         propertyContainer.appendChild(propertyInfo);

//         // Create and append image container
//         const imageContainer = document.createElement('div');
//         imageContainer.style.display = 'flex';
//         imageContainer.style.flexDirection = 'row';        

//         property.images.forEach(imageUrl => {
//             const img = document.createElement('img');
//             img.src = imageUrl;
//             img.alt = property.property_name;
//             img.style.width = '100px';
//             img.style.height = '100px';
//             img.style.marginRight = '5px';
//             imageContainer.appendChild(img);
//         });
//         propertyContainer.appendChild(imageContainer);

//         const wishlistCheckbox = document.createElement('input');
//         wishlistCheckbox.type = 'checkbox';
//         wishlistCheckbox.checked = loadWishlistStatus(user_name="user_one", property.property_name);
//         wishlistCheckbox.addEventListener('change', (event) => {
//             if (event.target.checked) {
//                 console.log(property.property_name)
//                 addToWishlist(user_name="user_one", property.property_name, wishlistCheckbox);
//                 updateLocalStorage(user_name="user_one", property.property_name, 'add');
//             } else {
//                 removeFromWishlist(user_name="user_one", property.property_name, wishlistCheckbox);
//                 updateLocalStorage(user_name="user_one", property.property_name, 'remove');
//             }
//         });

//         const wishlistLable = document.createElement('label');
//         wishlistLable.appendChild(wishlistCheckbox);
//         wishlistLable.appendChild(document.createTextNode('Wishlist'));
//         propertyContainer.appendChild(wishlistLable);
//         // Append property container to main container
//         container.appendChild(propertyContainer);
//     });
// }
//     this.properties = data;
//   }

  applyFilters(): void {
    const typeFilter = (document.getElementById('typeFilter') as HTMLSelectElement).value;
    const priceFilter = parseInt((document.getElementById('priceFilter') as HTMLInputElement).value) || Infinity;
    const roomsFilter = parseInt((document.getElementById('roomsFilter') as HTMLInputElement).value) || 0;
    const areaFilter = (document.getElementById('areaFilter') as HTMLInputElement).value.toLowerCase();

    this.properties = properties.filter(property => {
      return (typeFilter === 'all' || property.type === typeFilter) &&
             (property.price <= priceFilter) &&
             (property.nrBedrooms >= roomsFilter) &&
             (property.address.toLowerCase().includes(areaFilter));
    });
  }

  openLightbox(event: Event, property: Property): void {
    event.preventDefault();
    const target = event.target as HTMLImageElement;
    this.currentPropertyImages = Array.from(document.querySelectorAll(`img[data-property-id="${target.dataset['propertyId']}"]`));
    this.currentImageIndex = parseInt(target.dataset['index'] as string);

    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
      lightbox.style.display = 'block';
      this.showImage(this.currentImageIndex);
    }
  }

  closeLightbox(): void {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
      lightbox.style.display = 'none';
    }
  }

  navigateLightbox(direction: number): void {
    this.currentImageIndex = (this.currentImageIndex + direction + this.currentPropertyImages.length) % this.currentPropertyImages.length;
    this.showImage(this.currentImageIndex);
  }

  showImage(index: number): void {
    const lightboxImg = document.getElementById('lightbox-image') as HTMLImageElement;
    const captionText = document.getElementById('caption');
    if (lightboxImg && this.currentPropertyImages[index]) {
      lightboxImg.src = this.currentPropertyImages[index].src;
      if (captionText) {
        captionText.innerHTML = this.currentPropertyImages[index].alt;
      }
    }
  }

}
