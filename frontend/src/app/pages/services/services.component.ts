import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterOutlet, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { StorageService } from '../../shared/services/adminService/storage/storage.service';
import { Storage, ref, deleteObject } from '@angular/fire/storage';
import { TreatmentsService } from '../../shared/services/adminService/treatments/treatments.service';
import { Treatments } from '../../interfaces/treatments';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    MatIcon,
    TranslateModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    RouterOutlet
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  constructor(private router: Router,
        private storage: Storage,
        private storageService: StorageService,
        private treatmentsService: TreatmentsService
  ) {}
  isLoading = true;
  treatments: Treatments[] = [];
  images: { name: string; url: string; timeCreated: string }[] = [];
  failLoad = false;
  cores: string[] = ['#F58634', '#A8CF45', '#2DABE5','#E50612','#F58634', '#A8CF45'];
  combinedData: { image: any; treatment: any }[] = [];

  about: string[] = [
    'Fisioterapia',
    'Terapia Ocupacional',
    'Fonoaudiologia',
    'Psicomotricidade',
    'Psicologia',
    'Psicopedagogia'
  ];


  async ngOnInit(): Promise<void> {

    this.isLoading = true;
    this.getTreatments();
    try {
      this.images = await this.storageService.listTreatments();
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
      this.isLoading = true;
    }

  }

  getTreatments() {
    this.failLoad = false;
    this.isLoading = true;
      setTimeout(() => {
            this.isLoading = true;

         this.treatmentsService.getTreatments().subscribe({
      next: (response) => {
        this.treatments = response;
        this.isLoading=false
        if(this.treatments.length === 0 )
        {
          this.isLoading = false;
          this.failLoad = true;
          console.log("no data on database")
        }
      },
      error: (err) => {
        console.error('erro ao buscar tratamentos', err);
        this.isLoading=false
        this.failLoad = true;
        console.log(this.failLoad);
      },
    });
  }, 5000);

  }
  changeService(about: string) {
    this.isLoading = true;
    this.router.navigate(['services/' + about]);
    this.isLoading = false;
  }
}
