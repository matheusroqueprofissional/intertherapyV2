import { Component, OnInit } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthGuard } from '../../auth.guard';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent implements OnInit {
  previewUrl: string | null = null;

  ngOnInit(): void {
    this.previewUrl = "../../../assets/images/admin/noImage.png"
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.fileToUpload = file;

      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          this.previewUrl = reader.result as string;
        };
        reader.readAsDataURL(file);
      } else {
        alert('Por favor, selecione um arquivo de imagem.');
      }
    }
  }

  fileToUpload: File | null = null;
  uploadProgress: string | null = null;

  async uploadFile(): Promise<void> {
    if (this.fileToUpload) {
      const storage = getStorage();
      const storageRef = ref(storage, `images/${this.fileToUpload.name}`);

      this.uploadProgress = 'Enviando...';

      try {
        // Faz o upload do arquivo para o Firebase Storage
        await uploadBytes(storageRef, this.fileToUpload);

        // Obtém a URL de download do arquivo
        const downloadURL = await getDownloadURL(storageRef);
        this.uploadProgress = `Upload concluído! URL: ${downloadURL}`;
        console.log('URL da imagem:', downloadURL);
      } catch (error) {
        console.error('Erro ao fazer upload:', error);
        this.uploadProgress = 'Erro ao enviar o arquivo.';
      }
    } else {
      alert('Nenhum arquivo selecionado para upload.');
    }
  }
}
