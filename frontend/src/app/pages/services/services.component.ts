import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Router, RouterOutlet } from '@angular/router';
import { PsychologyComponent } from "./psychology/psychology.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TranslateModule, CommonModule, RouterOutlet],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {

  constructor(private router:Router){}

  cores: string[] = ['#F58634', '#A8CF45', '#2DABE5', '#E50612','#F58634', '#A8CF45'];
  especialidades: string[] = [
    'Fisioterapia',
    'Terapia Ocupacional',
    'Fonoaudiologia',
    'Psicomotricidade',
    'Psicologia',
    'Psicopedagogia',
  ];
  number = 0;


  changeService(servico:string){
    this.router.navigate(["services/"+servico]);
    console.log(servico)
  }


}
