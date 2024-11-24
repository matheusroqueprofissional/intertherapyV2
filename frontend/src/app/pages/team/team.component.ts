import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {

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
