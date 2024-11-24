import { Component, OnInit,inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [TranslateModule, CommonModule, FormsModule,MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule,RouterOutlet],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss',
})
export class AdminPageComponent implements OnInit {

  constructor(private router:Router){}

  cores: string[] = ['#F58634', '#A8CF45', '#2DABE5'];

  about: string[] = ["Carousel dashboard management","Treatments management","Employers management"]

  previewUrl: string | null = null;
  titulo: string = 'titulo';
  editando: boolean = false;
  cansend:boolean = false;
  subtitulo: string = 'subtitulo';

  changeService(about:string){
    this.router.navigate(["admin/"+about]);
    console.log(about)
  }

  toggleEdicao() {
    this.editando = !this.editando;
  }


  ngOnInit(): void {
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
