import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'], // Corrigi a propriedade 'styleUrl' para 'styleUrls'
})
export class HeaderComponent {
  links = ['inicio', 'about', 'services', 'team', 'contact'];
  hoverColors = ['#A8CF45', '#E50612', '#2DABE5', '#F58634', '#090909'];
  isHovered = [false, false, false, false, false]; // Estado de hover de cada link

  constructor(private router: Router) {}

  redirectTo(value: string) {
    console.log(value);
    this.router.navigate([value]);
  }
}
