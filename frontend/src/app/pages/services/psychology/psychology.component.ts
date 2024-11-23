import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-psychology',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './psychology.component.html',
  styleUrls: ['../subpagesGlobal.scss','./psychology.component.scss']
})
export class PsychologyComponent {

}
