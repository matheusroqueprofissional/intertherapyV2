import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { TreatmentsComponent } from "../treatments/treatments.component";

@Component({
  selector: 'app-treatments-area',
  standalone: true,
  imports: [MatGridListModule, TreatmentsComponent],
  templateUrl: './treatments-area.component.html',
  styleUrl: './treatments-area.component.scss'
})
export class TreatmentsAreaComponent {

}
