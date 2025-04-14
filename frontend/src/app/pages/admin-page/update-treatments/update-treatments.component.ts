import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../../shared/services/adminService/storage/storage.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { TreatmentsService } from '../../../shared/services/adminService/treatments/treatments.service';
import { Treatments } from '../../../interfaces/treatments';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-update-treatments',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatIcon,
  ],
  templateUrl: './update-treatments.component.html',
  styleUrls: ['../../../global.scss', './update-treatments.component.scss'],
})
export class UpdateTreatmentsComponent implements OnInit {
  isLoading = false;
  treatments: Treatments[] = [];
  images: { name: string; url: string; timeCreated: string }[] = [];
  previewUrl: string | null = null;
  cansend = false;
  failLoad = false;
  createTreatmentForm!: FormGroup;
  constructor(
    private storageService: StorageService,
    private treatmentsService: TreatmentsService
  ) {


  }
  combinedData: { image: any; treatment: any }[] = [];
  async ngOnInit(): Promise<void> {
    this.isLoading = true;
    this.getTreatments();
    this.previewUrl = '../../../assets/images/admin/noImage.png';
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
