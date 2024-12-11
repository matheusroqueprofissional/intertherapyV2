import { Component, inject, model, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule, MatGridList } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { TreatmentsAdminComponent } from '../../treatments-admin/treatments-admin.component';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  DialogData,
  UpdateTreatmentsComponent,
} from '../../../../pages/admin-page/update-treatments/update-treatments.component';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { StorageService } from '../../../services/adminService/storage/storage.service';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselComponent } from '../../../carousel/carousel.component';
import { TreatmentUpdateService } from '../../../services/adminService/treatmentUpdate/treatment-update.service';
import { TreatmentsInterface } from '../../../../interfaces/treatments-interface';
import { AreasInterface } from '../../../../interfaces/areas-interface';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    DropdownModule,
    MatFormFieldModule,
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
  styleUrl: './dialog.component.scss',
})
export class DialogComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<UpdateTreatmentsComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly animal = model(this.data.animal);

  onNoClick(): void {
    this.dialogRef.close();
  }
  downloadURL!: String;
  areas!: AreasInterface[] | undefined;
  sendImageForm!: FormGroup;
  cansend: boolean = false;
  previewUrl: string | null = null;

  constructor(
    private fb: FormBuilder,
    private storageService: StorageService,
    private treatmentsService: TreatmentUpdateService,
    private treatmentsUpdateService: TreatmentUpdateService
  ) {
    this.sendImageForm = this.fb.group({
      name: ['', Validators.required], // Nome do tratamento
      area: [''], // Resumo do atendimento
      description: ['', Validators.required], // Descrição do tratamento
      resume: ['', Validators.required], // Nome do tratamento
      file: [null, Validators.required], // Arquivo de imagem
      imageUrl: [this.downloadURL, Validators.required],
    });
  }
  ngOnInit(): void {
    this.areas = [
      { name: 'Fisioterapia' },
      { name: 'Fonoaudilogia' },
      { name: 'Terapia ocupacional' },
      { name: 'Pscicomotricidade' },
      { name: 'psicopedagogo' },
    ];
    throw new Error('Method not implemented.');
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

  onAreaChange(event: any): void {
    const selectedArea = event.value.name; // Pega apenas o nome da área
    this.sendImageForm.patchValue({ area: selectedArea });
    console.log('Área selecionada:', selectedArea);
  }

  fileToUpload: File | null = null;
  uploadProgress: string | null = null;
  TreatmentsInterface!: TreatmentsInterface;
  async uploadFile(): Promise<void> {
    if (this.fileToUpload && this.cansend == true) {
      const storage = getStorage();
      const storageRef = ref(
        storage,
        `imagesTreatment/${this.fileToUpload.name}`
      );

      this.uploadProgress = 'Enviando...';

      try {
          // Realiza o upload
      await uploadBytes(storageRef, this.fileToUpload);

      // Obtém a URL do arquivo
      this.downloadURL = await getDownloadURL(storageRef);
      this.uploadProgress = `Upload concluído! URL: ${this.downloadURL}`;

      // Atualiza o campo imageUrl no formulário
      this.sendImageForm.patchValue({
        imageUrl: this.downloadURL,
      });

      // Cria os dados para envio
      const formData = {
        ...this.sendImageForm.value,
        area: this.sendImageForm.value.area.name, // Envia apenas o nome da área
      };

      console.log('Enviando:', formData);

      } catch (error) {
        console.error('Erro ao fazer upload:', error);
        this.uploadProgress = 'Erro ao enviar o arquivo.';
      }
    } else {
      alert('Nenhum arquivo selecionado para upload.');
    }
    try {
      console.log(this.sendImageForm);
      this.storageService
        .postTitleSubtitle({
          title: 'this.sendImageForm.value.treatmentName',
          subtitle: 'this.sendImageForm.value.subtitle',
        })
        .subscribe({
          next: (response) => console.log('Resposta:', response),
          error: (err) => console.error('Erro:', err),
        });
    } catch {
      console.log('titulo não enviado');
    }

    this.treatmentsService.postTreatments(this.sendImageForm.value).subscribe(
      (response) => {
        console.log('Sucesso:', response);
        console.log(this.downloadURL);
      },
      (error) => {
        console.error('Erro ao enviar:', error);
      }
    );
  }
}
