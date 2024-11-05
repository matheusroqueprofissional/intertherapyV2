import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  links = ['Sobre nós', 'services', 'team'];


  constructor(private router: Router) {}


  redirectTo(value: string) {
    console.log(value);
    this.router.navigate([value]);
  }
}

