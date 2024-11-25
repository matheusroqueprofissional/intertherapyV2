import { AdminServiceService } from './../../../shared/services/adminService/admin-service.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { StorageService } from '../../../shared/services/adminService/storage/storage.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CarouselComponent } from '../../../shared/carousel/carousel.component';
@Component({
  selector: 'app-send-images',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    CarouselComponent,
  ],
  templateUrl: './send-images.component.html',
  styleUrls: ['../../../global.scss', './send-images.component.scss'],
})
export class SendImagesComponent implements OnInit {
  isLoading: boolean = false;
  images: { name: string; url: string; timeCreated: string }[] = [];
  sendImageForm!: FormGroup;
  previewUrl: string | null = null;
  titulo: string = 'titulo';
  editando: boolean = false;
  cansend: boolean = false;
  subtitulo: string = 'subtitulo';

  constructor(private fb: FormBuilder, private storageService: StorageService) {
    this.sendImageForm = this.fb.group({
      title: [this.titulo, [Validators.required, Validators.minLength(4)]],
      subtitle: [
        this.subtitulo,
        [Validators.required, Validators.minLength(4)],
      ],
      file: [this.fileToUpload, [Validators.required, Validators.minLength(4)]],
    });
  }

  async ngOnInit() {
    this.isLoading = true;
    this.previewUrl = '../../../assets/images/admin/noImage.png';
    console.log(this.sendImageForm.value.title);
  }

  toggleEdicao() {
    this.editando = !this.editando;
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
    if (
      this.sendImageForm.value.title == 'titulo' ||
      this.sendImageForm.value.title == 'TITULO'
    ) {
      alert('favor alterar o titulo');
      return;
    }
    if (
      this.sendImageForm.value.subtitle == 'subtitulo' ||
      this.sendImageForm.value.subtitle == 'SUBTITULO'
    ) {
      alert('favor alterar o subtitulo');
      return;
    }
    if (this.fileToUpload && this.cansend == true) {
      const storage = getStorage();
      const storageRef = ref(storage, `images/${this.fileToUpload.name}`);

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
  }
}
