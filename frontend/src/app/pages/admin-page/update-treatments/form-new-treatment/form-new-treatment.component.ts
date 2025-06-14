import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule, AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Treatments } from '../../../../interfaces/treatments';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogContent } from '@angular/material/dialog';
import { TreatmentsService } from '../../../../shared/services/adminService/treatments/treatments.service';
import { Storage, ref, uploadBytes, getDownloadURL, getStorage } from '@angular/fire/storage';
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
  constructor(private storage: Storage,private fb: FormBuilder, private treatmentsService: TreatmentsService
  ) {
    this.createTreatmentForm = this.fb.group({
      Name: [this.treatmentsInterface.Name, [Validators.minLength(4), Validators.required]],
      Resume: [this.treatmentsInterface.Resume, [Validators.minLength(4), Validators.required]],
      Area: [this.treatmentsInterface.Area, [Validators.required]],
      ImageUrl: [this.fileToUpload, [Validators.minLength(10), Validators.required]],
    });
  }
  isErrorState(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean {
    throw new Error('Method not implemented.');
  }
  fileToUpload: String | null = null;
  uploadProgress: string | null = null;
  selectedFile: File | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }


  async onSubmit() {
    if (!this.selectedFile) return;

    const filePath = `imagesTreatment/${Date.now()}_${this.selectedFile.name}`;
    const fileRef = ref(this.storage, filePath);
    const snapshot = await uploadBytes(fileRef, this.selectedFile);
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log('Download URL:', downloadURL);
      if (this.fileToUpload) {


        try {
          const snapshot = await uploadBytes(fileRef, this.selectedFile);
          const downloadURL = await getDownloadURL(snapshot.ref);
          console.log('Download URL:', downloadURL);
          this.uploadProgress = `Upload concluído! URL: ${downloadURL}`;
        } catch (error) {
          console.error('Erro ao fazer upload:', error);
          this.uploadProgress = 'Erro ao enviar o arquivo.';
        }
      } else {
        console.log(this.fileToUpload)
      }

    const formData = this.createTreatmentForm.value;
    this.treatmentsService.postTreatments(formData).subscribe({
      next: () => {
        console.log('Tratamento criado com sucesso!');
      },
      error: (err) => {
        console.error('Erro ao criar tratamento:', err);

      }
    });
  }
}
