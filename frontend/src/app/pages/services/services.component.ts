import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterOutlet, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
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
  constructor(private router: Router) {}

  cores: string[] = ['#F58634', '#A8CF45', '#2DABE5','#E50612','#F58634', '#A8CF45'];
  about: string[] = [
    'Fisioterapia',
    'Terapia Ocupacional',
    'Fonoaudiologia',
    'Psicomotricidade',
    'Psicologia',
    'Psicopedagogia'
  ];




  isLoading: boolean = false;

  changeService(about: string) {
    this.isLoading = true;
    this.router.navigate(['services/' + about]);
    console.log(about);
    this.isLoading = false;
  }
}
