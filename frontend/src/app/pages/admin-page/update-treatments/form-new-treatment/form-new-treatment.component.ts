import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Treatments } from '../../../../interfaces/treatments';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-new-treatment',
  standalone: true,
  imports: [
    FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule
  ],
  templateUrl: './form-new-treatment.component.html',
  styleUrl: './form-new-treatment.component.scss',
})
export class FormNewTreatmentComponent {
  createTreatmentForm!: FormGroup;
  treatmentsInterface!: Treatments;

  constructor(private fb: FormBuilder) {
    this.createTreatmentForm = this.fb.group({
      name: [this.treatmentsInterface.name, [Validators.minLength(4), Validators.required]],
      resume: [this.treatmentsInterface.resume, [Validators.minLength(4), Validators.required]],
      area: [this.treatmentsInterface.area, Validators.required],
      imageUrl: [this.treatmentsInterface.image_url, [Validators.minLength(10), Validators.required]],
    });
  }

  postTreatments(treatmentsInterface: Treatments) {
    console.log(treatmentsInterface);
  }
}
