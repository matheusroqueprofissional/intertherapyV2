import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-speech-therapy',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './speech-therapy.component.html',
  styleUrls: ['../subpagesGlobal.scss','./speech-therapy.component.scss']
})
export class SpeechTherapyComponent {

}
