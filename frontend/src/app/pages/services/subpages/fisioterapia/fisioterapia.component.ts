import { Component, Input } from '@angular/core';
import { ServicesContentComponent } from "../services-content/services-content.component";

@Component({
  selector: 'app-fisioterapia',
  standalone: true,
  imports: [ServicesContentComponent],
  templateUrl: './fisioterapia.component.html',
  styleUrls: ['../../../../global.scss','./fisioterapia.component.scss']
})
export class FisioterapiaComponent {

}
