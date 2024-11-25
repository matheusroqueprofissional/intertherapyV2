import { Component } from '@angular/core';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { AdminPageComponent } from "../admin-page.component";
import { TreatmentsAdminComponent } from "../../../shared/components/treatments-admin/treatments-admin.component";

@Component({
  selector: 'app-update-treatments',
  standalone: true,
  imports: [MatGridListModule, MatGridList, TreatmentsAdminComponent],
  templateUrl: './update-treatments.component.html',
  styleUrls: ['../../../global.scss','./update-treatments.component.scss']
})
export class UpdateTreatmentsComponent {

}
