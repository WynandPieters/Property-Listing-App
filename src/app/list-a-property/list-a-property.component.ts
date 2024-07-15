import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-a-property',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './list-a-property.component.html',
  styleUrl: './list-a-property.component.css'
})
export class ListAPropertyComponent implements OnInit {
  propertyForm: FormGroup;
  selectedFiles: File[] = [];
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

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.propertyForm = this.fb.group({
      person_name: [''],
      property_name: [''],
      address: [''],
      price: [''],
      type: [''],
      bedroom: [''],
      bathroom: [''],
      total_floors: [''],
      garden: [false],
      power: [false],
      description: ['']
    });
  }
  ngOnInit(): void {
    this.changeBackgroundImage();
    this.intervalId = setInterval(() => this.changeBackgroundImage(), 5000);;
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFiles = Array.from(event.target.files);
    }
  }

  onSubmit() {
    const formData = new FormData();

    for (const key in this.propertyForm.controls) {
      if (this.propertyForm.controls) {
        formData.append(key, this.propertyForm.get(key)?.value)
    }
  }

    for (const file of this.selectedFiles) {
      formData.append('images', file);
    }

    this.http.post('http://localhost:5000/api/v1/storepost', formData).subscribe(
      (response) => console.log(response),
      (error) => console.error('Error', error)
    );
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
