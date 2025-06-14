import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../../shared/services/adminService/storage/storage.service';
import { Storage, ref, deleteObject } from '@angular/fire/storage';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { TreatmentsService } from '../../../shared/services/adminService/treatments/treatments.service';
import { Treatments } from '../../../interfaces/treatments';
import { MatIcon } from '@angular/material/icon';
import {
  MatDialog,
} from '@angular/material/dialog';
import { FormNewTreatmentComponent } from './form-new-treatment/form-new-treatment.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-update-treatments',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    RouterOutlet,
    MatIcon

  ],
  templateUrl: './update-treatments.component.html',
  styleUrls: ['../../../global.scss', './update-treatments.component.scss'],
})
export class UpdateTreatmentsComponent implements OnInit {
  isLoading = false;
  treatments: Treatments[] = [];
  images: { name: string; url: string; timeCreated: string }[] = [];
  failLoad = false;
  readonly dialog = inject(MatDialog);
  createTreatmentForm!: FormGroup;
  constructor(
    private storage: Storage,
    private storageService: StorageService,
    private treatmentsService: TreatmentsService
  ) {


  }
  combinedData: { image: any; treatment: any }[] = [];
  async ngOnInit(): Promise<void> {

    this.isLoading = true;
    this.getTreatments();
    try {
      this.images = await this.storageService.listTreatments();
      console.log('Imagens carregadas (ordenadas):', this.images);
      this.combinedData = this.images.map((image, index) => ({
        image,
        treatment: this.treatments[index] || null,
      }));
      this.combinedData = this.images
        .slice()
        .reverse()
        .map((image, index) => ({
          image,
          treatment: this.treatments[index] || null,
        }));
    } catch (error) {
      console.error('Erro ao carregar imagens:', error);
      this.images = [];
    } finally {
      this.isLoading = false;
    }

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(FormNewTreatmentComponent,{width:'700px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  async deleteImage(url: string) {
    // Extraindo o caminho do arquivo a partir da URL
  const decodedUrl = decodeURIComponent(url); // decodifica os %2F
  const baseUrl = 'https://firebasestorage.googleapis.com/v0/b/intertherapy-f5e69.appspot.com/o/';

  // Remove base URL e query params
  const pathWithToken = decodedUrl.replace(baseUrl, '');
  const filePath = pathWithToken.split('?')[0]; // pega só o caminho até .png, por exemplo

  const fileRef = ref(this.storage, filePath);

  try {
    await deleteObject(fileRef);
    console.log('Arquivo deletado com sucesso!');

    // Atualiza lista de imagens (opcional)
    this.images = this.images.filter(image => image.url !== url);
    location.reload();
  } catch (error) {
    console.error('Erro ao deletar o arquivo:', error);
  }
  }
  getTreatments() {
    this.treatmentsService.getTreatments().subscribe({
      next: (response) => {
        this.treatments = response;
        console.log(this.treatments);
      },
      error: (err) => {
        console.error('erro ao buscar tratamentos', err);
        this.failLoad = true;
        console.log(this.failLoad);
      },
    });
  }
}
