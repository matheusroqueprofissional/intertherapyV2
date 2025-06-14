import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Importa aqui
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA, MatSnackBarActions, MatSnackBarAction, MatSnackBarLabel } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [
    CommonModule, // ✅ Adiciona aqui
    MatButtonModule,
    MatSnackBarLabel,
    MatSnackBarActions,
    MatSnackBarAction
  ],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss'
})
export class SnackbarComponent {
  snackBarRef = inject(MatSnackBarRef);
  data: { message: string; type: 'success' | 'error' | 'info' | 'warning' } = inject(MAT_SNACK_BAR_DATA);
}
