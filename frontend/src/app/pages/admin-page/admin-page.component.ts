import { Component, OnInit, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router, RouterOutlet } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    RouterOutlet,
    MatProgressSpinnerModule,
  ],
  templateUrl: './admin-page.component.html',
  styleUrls: ['../../global.scss', './admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {

  fileToUpload: File | null = null;
  uploadProgress: string | null = null;
  isLoading:boolean = false;

  constructor(private router: Router,private authService: AuthService) {}

  ngOnInit(): void {
    this.previewUrl = '../../../assets/images/admin/noImage.png';
  }

  cores: string[] = ['#F58634', '#A8CF45'];
  about: string[] = [
    'Carousel dashboard management',
    'Treatments management',
  ];

  previewUrl: string | null = null;
  logout() {
    this.authService.logout();
  }
  changeService(about: string) {
    this.isLoading = true
    this.router.navigate(['admin/' + about]);
    console.log(about);
    this.isLoading = false
  }


}
