import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { StorageService } from '../../../shared/services/storage/storage.service';

@Component({
  selector: 'app-send-images',
  standalone: true,
  imports: [TranslateModule, CommonModule, FormsModule,MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './send-images.component.html',
  styleUrl: './send-images.component.scss'
})
export class SendImagesComponent implements OnInit{



    images: { name: string; url: string; timeCreated: string }[] = [];

    constructor(private storageService: StorageService) {}

  previewUrl: string | null = null;
  titulo: string = 'titulo';
  editando: boolean = false;
  cansend:boolean = false;
  subtitulo: string = 'subtitulo';

  toggleEdicao() {
    this.editando = !this.editando;
  }


  async ngOnInit() {
    this.images = await this.storageService.listFiles();
    console.log('Imagens carregadas (ordenadas):', this.images);
    this.previewUrl = '../../../assets/images/admin/noImage.png';
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
          this.cansend = true
          this.previewUrl = reader.result as string;
        };
        reader.readAsDataURL(file);
      } else {
        this.cansend = false
      }
    }
  }

  fileToUpload: File | null = null;
  uploadProgress: string | null = null;

  async uploadFile(): Promise<void> {
    if (this.fileToUpload && this.cansend == true) {
      const storage = getStorage();
      const storageRef = ref(storage, `images/${this.fileToUpload.name}`);

      this.uploadProgress = 'Enviando...';

      try {
        // Faz o upload do arquivo para o Firebase Storage
        await uploadBytes(storageRef, this.fileToUpload);

        // Obtém a URL de download do arquivo
        const downloadURL = await getDownloadURL(storageRef);
        this.uploadProgress = `Upload concluído! URL: ${downloadURL}`;
      } catch (error) {
        console.error('Erro ao fazer upload:', error);
        this.uploadProgress = 'Erro ao enviar o arquivo.';
      }
    } else {
      alert('Nenhum arquivo selecionado para upload.');
    }
  }
}
