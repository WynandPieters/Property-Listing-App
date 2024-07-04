import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PropertyTypes, propertyTypes } from './propertyTypes.model';

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.css'
})
export class EmailFormComponent {
  propertyTypes: PropertyTypes[] = propertyTypes;

  priceAssessmentForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    emailAddress: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', Validators.required],
    valuationDate: ['', Validators.required],
    propertyType: ['', Validators.required],
    propertyLocation: ['', Validators.required],
    solar: ['']
});

constructor(
  private formBuilder: FormBuilder,
  ) {}

onSubmit() {
  console.log('FORM VALUES', this.priceAssessmentForm)
}

}