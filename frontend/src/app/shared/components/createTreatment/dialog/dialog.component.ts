import { Component, inject, model } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule, MatGridList } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { TreatmentsAdminComponent } from '../../treatments-admin/treatments-admin.component';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData, UpdateTreatmentsComponent } from '../../../../pages/admin-page/update-treatments/update-treatments.component';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { StorageService } from '../../../services/adminService/storage/storage.service';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselComponent } from '../../../carousel/carousel.component';
import { TreatmentUpdateService } from '../../../services/adminService/treatmentUpdate/treatment-update.service';
import { TreatmentsInterface } from '../../../../interfaces/treatments-interface';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    CommonModule,
    TranslateModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  readonly dialogRef = inject(MatDialogRef<UpdateTreatmentsComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly animal = model(this.data.animal);

  onNoClick(): void {
    this.dialogRef.close();
  }






  sendImageForm!: FormGroup;
  cansend: boolean = false;
  previewUrl: string | null = null;

  constructor(private fb: FormBuilder, private storageService: StorageService,private treatmentsService:TreatmentUpdateService) {
    this.sendImageForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      subtitle: [
        '',
        [Validators.required, Validators.minLength(4)],
      ],
      file: [this.fileToUpload, [Validators.required, Validators.minLength(4)]],
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.fileToUpload = file;
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          const img = new Image();
          img.src = reader.result as string;
          this.cansend = true;
          this.previewUrl = reader.result as string;
        };
        reader.readAsDataURL(file);
      } else {
        this.cansend = false;
      }
    }
  }

  fileToUpload: File | null = null;
  uploadProgress: string | null = null;

  async uploadFile(): Promise<void> {


    if (this.fileToUpload && this.cansend == true) {
      const storage = getStorage();
      const storageRef = ref(storage, `imagesTreatment/${this.fileToUpload.name}`);

      this.uploadProgress = 'Enviando...';

      try {
        await uploadBytes(storageRef, this.fileToUpload);

        const downloadURL = await getDownloadURL(storageRef);
        this.uploadProgress = `Upload concluído! URL: ${downloadURL}`;
      } catch (error) {
        console.error('Erro ao fazer upload:', error);
        this.uploadProgress = 'Erro ao enviar o arquivo.';
      }
    } else {
      alert('Nenhum arquivo selecionado para upload.');
    }
    try {
      this.storageService
        .postTitleSubtitle({
          title: 'this.sendImageForm.value.title',
          subtitle: 'this.sendImageForm.value.subtitle',
        })
        .subscribe({
          next: (response) => console.log('Resposta:', response),
          error: (err) => console.error('Erro:', err),
        });

      console.log('titulo enviado');
      console.log(
        this.sendImageForm.value.title,
        this.sendImageForm.value.subtitle
      );
    } catch {
      console.log('titulo não enviado');
    }
    this.treatmentsService.postTreatments({
      name:'',
      description:'',
      area:'',
      resume:''
    })


  }
}
