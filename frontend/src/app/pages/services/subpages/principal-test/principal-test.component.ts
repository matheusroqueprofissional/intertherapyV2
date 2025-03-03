import { Component, Input, input } from '@angular/core';
import { Services } from '../../shared/services';

@Component({
  selector: 'app-principal-test',
  standalone: true,
  imports: [],
  templateUrl: './principal-test.component.html',
  styleUrl: './principal-test.component.scss'
})
export class PrincipalTestComponent {

  @Input() service!: Services; // O template recebe os dados via Input


}
