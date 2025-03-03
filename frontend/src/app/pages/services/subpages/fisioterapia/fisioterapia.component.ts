import { Component, Input } from '@angular/core';
import { PrincipalTestComponent } from "../principal-test/principal-test.component";
import { Services } from '../../shared/services';

@Component({
  selector: 'app-fisioterapia',
  standalone: true,
  imports: [PrincipalTestComponent,PrincipalTestComponent],
  templateUrl: './fisioterapia.component.html',
  styleUrl: './fisioterapia.component.scss'
})
export class FisioterapiaComponent {
  Fisio: Services = {
    Title: "Fisioterapia",
    urlImage:"test",
    Subtitle: "Reabilitação e cuidados preventivos",
    Content1: "Tratamento para problemas musculares e articulares.",
    AssessmentFormat: "Consulta presencial com avaliação funcional",
    ContentFormat: "Sessões individuais",
    WhatToTakeContent: "Roupas leves e exames médicos",
    Treatments: ["Alongamento", "Reeducação Postural", "Fortalecimento Muscular"]
  };
}
