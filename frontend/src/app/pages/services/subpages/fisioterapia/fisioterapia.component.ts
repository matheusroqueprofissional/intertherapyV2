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

}
