import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  model,
  OnInit,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule, MatGridList } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { TreatmentsAdminComponent } from '../../../shared/components/treatments-admin/treatments-admin.component';
import { DialogComponent } from '../../../shared/components/createTreatment/dialog/dialog.component';
import { TreatmentsAdminService } from '../../../shared/services/adminService/treatmentsAdmin/treatments-admin.service';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../../shared/services/adminService/storage/storage.service';
import { TreatmentsInterface } from '../../../interfaces/treatments-interface';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-update-treatments',
  standalone: true,
  imports: [
    MatGridListModule,
    MatGridList,
    TreatmentsAdminComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './update-treatments.component.html',
  styleUrls: ['../../../global.scss', './update-treatments.component.scss'],
})
export class UpdateTreatmentsComponent implements OnInit {
  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);
  @Input() imageUrl:string = '';
  @Input() image:string = '';
  images: { name: string; url: string; timeCreated: string }[] = [];




  constructor(private storageService:StorageService,private treatmentsAdminService: TreatmentsAdminService) {}
  treatments!: any[]; // Variável para armazenar os tratamentos

  async ngOnInit(): Promise<void> {

    console.log("inicio")
    this.images = [];
    this.images = await this.storageService.listTreatments();
    console.log('Imagens carregadas (ordenadas):', this.images);
    try {
      this.images = (await this.storageService.listTreatments()).reverse();  } catch (error) {
      console.error('Erro ao carregar imagens:', error);
      this.images = []; // Garante que o template seja atualizado mesmo em caso de erro
  }

    this.getTreatments();

    throw new Error('Method not implemented.');
  }
  trackByIndex(index: number, item: any): number {
    return index;
  }
  errorMessage: string = ''; // Variável para armazenar mensagens de erro
  treatmentsInterface!:TreatmentsInterface
  getTreatments() {
    try {
      this.treatmentsAdminService.getTreatments().subscribe(
        (response) => {
          this.treatments = response; // Armazena a resposta na variável
          console.log('Tratamentos recebidos:', this.treatments);

                  // Associa o URL da imagem de `this.images` a cada tratamento
        this.treatments = response.map((treatment: TreatmentsInterface, index: number) => {
          // Garante que não ultrapasse o tamanho do array de imagens
          const image = this.images[index] ? this.images[index].url : '';
          return {
            ...treatment,
            imageUrl: image, // Adiciona a URL da imagem
          };
        });

        console.log('Tratamentos com URLs de imagens:', this.treatments);
        },
        (error) => {
          this.errorMessage = 'Erro ao buscar os tratamentos.';
          console.error('Erro ao buscar os tratamentos:', error);
        }
      );
    } catch (error) {
      this.errorMessage = 'Erro inesperado.';
      console.error('Erro inesperado:', error);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '70%', // 70% da largura da tela
      height: '70%', // 70% da altura da tela
      data: { name: this.name(), animal: this.animal() },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }
}
