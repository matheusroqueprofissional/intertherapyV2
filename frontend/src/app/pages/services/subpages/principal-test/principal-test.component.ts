import { Component, input } from '@angular/core';
import { Services } from '../../shared/services';

@Component({
  selector: 'app-principal-test',
  standalone: true,
  imports: [],
  templateUrl: './principal-test.component.html',
  styleUrl: './principal-test.component.scss'
})
export class PrincipalTestComponent {

  user = 'Matheus'; // Envia esse valor para o filho

}
