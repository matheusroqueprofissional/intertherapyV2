import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,MatIconModule,TranslateModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  links = ['about us', 'services', 'contact'];

  constructor(private router: Router) {}

  redirectTo(value: string) {
    if(value =="Sobre nós"){
      value ="about"
    }
    console.log(value);
    this.router.navigate([value]);
  }
}

