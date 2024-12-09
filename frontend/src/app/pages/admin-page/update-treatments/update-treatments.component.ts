import {ChangeDetectionStrategy, Component, inject, model, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatGridListModule, MatGridList } from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { TreatmentsAdminComponent } from '../../../shared/components/treatments-admin/treatments-admin.component';
import { DialogComponent } from '../../../shared/components/createTreatment/dialog/dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-update-treatments',
  standalone: true,
  imports: [MatGridListModule, MatGridList, TreatmentsAdminComponent,MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './update-treatments.component.html',
  styleUrls: ['../../../global.scss','./update-treatments.component.scss']
})
export class UpdateTreatmentsComponent {

  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

constructor(){}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '70%', // 70% da largura da tela
      height: '70%', // 70% da altura da tela
      data: { name: this.name(), animal: this.animal() },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }


}
