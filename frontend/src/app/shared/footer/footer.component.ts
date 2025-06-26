import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  links = ['Sobre nós', 'services', 'contact'];

  constructor(private router: Router) {}

  redirectTo(value: string) {
    if(value =="Sobre nós"){
      value ="about"
    }
    console.log(value);
    this.router.navigate([value]);
  }
}

