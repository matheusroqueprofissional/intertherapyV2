import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule, AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Treatments } from '../../../../interfaces/treatments';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogContent } from '@angular/material/dialog';
import { TreatmentsService } from '../../../../shared/services/adminService/treatments/treatments.service';

@Component({
  selector: 'app-form-new-treatment',
  standalone: true,
  imports: [
    MatDialogContent,FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule
  ],
  templateUrl: './form-new-treatment.component.html',
  styleUrl: './form-new-treatment.component.scss',
})
export class FormNewTreatmentComponent implements ErrorStateMatcher {
  createTreatmentForm!: FormGroup;
  treatmentsInterface: Treatments = {
    Name: '',
    Resume: '',
    Area: '',
    Image_url: ''
  };;
  matcher = new ErrorStateMatcher();
  constructor(private fb: FormBuilder, private treatmentsService: TreatmentsService
  ) {
    this.createTreatmentForm = this.fb.group({
      Name: [this.treatmentsInterface.Name, [Validators.minLength(4), Validators.required]],
      Resume: [this.treatmentsInterface.Resume, [Validators.minLength(4), Validators.required]],
      Area: [this.treatmentsInterface.Area, [Validators.required]],
      ImageUrl: [this.treatmentsInterface.Image_url, [Validators.minLength(10), Validators.required]],
    });
  }
  isErrorState(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    const formData = this.createTreatmentForm.value;
    this.treatmentsService.postTreatments(formData).subscribe({
      next: () => {
        console.log('Tratamento criado com sucesso!');
        console.log(formData)
        console.log(formData.value)
      },
      error: (err) => {
        console.error('Erro ao criar tratamento:', err);
        console.log(formData)
      }
    });
  }
}
