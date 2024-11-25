import { CommonModule } from '@angular/common';
import { Component, inject, Injectable, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { StorageService } from '../../shared/services/adminService/storage/storage.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [    TranslateModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit{
  isLoading: boolean = false;
  images: { name: string; url: string; timeCreated: string }[] = [];
  sendImageForm!:FormGroup;
  previewUrl: string | null = null;
  titulo: string = 'titulo';
  editando: boolean = false;
  cansend: boolean = false;
  subtitulo: string = 'subtitulo';

  constructor(private storageService:StorageService){}

  async ngOnInit(): Promise<void> {
    this.isLoading=true;
    this.images = [];
    this.images = await this.storageService.listFiles();
    console.log('Imagens carregadas (ordenadas):', this.images);
    this.previewUrl = '../../../assets/images/admin/noImage.png';
    try {
      this.images = await this.storageService.listFiles();
      this.isLoading = false // Atualiza as imagens ao carregar
  } catch (error) {
      console.error('Erro ao carregar imagens:', error);
      this.isLoading = false
      this.images = []; // Garante que o template seja atualizado mesmo em caso de erro
  }
  }


  currentIndex = 0;

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  getPrevImage() {
    const prevIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    return this.images[prevIndex];
  }

  getNextImage() {
    const nextIndex = (this.currentIndex + 1) % this.images.length;
    return this.images[nextIndex];
  }

}
