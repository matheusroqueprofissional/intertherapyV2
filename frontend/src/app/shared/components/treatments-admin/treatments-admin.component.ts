import { Component } from '@angular/core';

@Component({
  selector: 'app-treatments-admin',
  standalone: true,
  imports: [],
  templateUrl: './treatments-admin.component.html',
  styleUrls: ['../../../global.scss','./treatments-admin.component.scss']
})
export class TreatmentsAdminComponent {

  deletar(){
    console.log("deletando");
  }

}
