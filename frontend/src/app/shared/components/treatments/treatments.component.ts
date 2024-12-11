import { Component, Input, OnInit } from '@angular/core';
import { TreatmentsInterface } from '../../../interfaces/treatments-interface';
import { StorageService } from '../../services/adminService/storage/storage.service';
import { TreatmentsAdminService } from '../../services/adminService/treatmentsAdmin/treatments-admin.service';

@Component({
  selector: 'app-treatments',
  standalone: true,
  imports: [],
  templateUrl: './treatments.component.html',
  styleUrls: ['../../../global.scss','../../../shared/components/treatments/treatments.component.scss']
})
export class TreatmentsComponent implements OnInit{
  @Input() title: string = '';
  @Input() imageUrl:string = '';
  @Input() description:string = '';

  constructor(private storageService:StorageService,private treatmentsAdminService: TreatmentsAdminService) {}
  async ngOnInit(): Promise <void> {
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
  treatments!: any[]; // Variável para armazenar os tratamentos
  images: { name: string; url: string; timeCreated: string }[] = [];


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


  deletar(){
    console.log("deletando");
  }
}
