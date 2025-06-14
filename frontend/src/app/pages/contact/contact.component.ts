import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Email } from '../../interfaces/email';
import { ContactService } from './Services/contact.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../shared/components/snackbar/snackbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {

  sendemailForm!: FormGroup;
  email: Email | undefined;
  durationInSeconds = 5;

  private _snackBar = inject(MatSnackBar);
  private contactService = inject(ContactService);

  constructor(private fb: FormBuilder) {
    this.sendemailForm = this.fb.group({
      name: [this.email?.name, [Validators.minLength(4), Validators.required]],
      from: [this.email?.from, [Validators.minLength(4), Validators.required]],
      about: [
        this.email?.about,
        [Validators.minLength(4), Validators.required],
      ],
      message: [
        this.email?.message,
        [Validators.minLength(4), Validators.required],
      ],
    });
  }

  sendEmail() {
    if (this.sendemailForm.invalid) {
      this.openSnackBar('Por favor, preencha todos os campos corretamente.', 'error');
      return;
    }

    const formData: Email = this.sendemailForm.value;

    this.contactService.sendEmail(formData).subscribe({
      next: () => {
        console.log('Email enviado com sucesso!');
        this.openSnackBar('Email enviado com sucesso!', 'success');
        this.sendemailForm.reset();
      },
      error: (err) => {
        console.error('Erro ao enviar email:', err);
        this.openSnackBar(
          'Erro ao enviar email. Verifique sua conexão ou tente novamente.',
          'error'
        );
      },
    });
  }

  private openSnackBar(msg: string, type: 'success' | 'error') {

    this._snackBar.openFromComponent(SnackbarComponent, {
      data: { message: msg, type, },
      duration:this.durationInSeconds*1000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: type === 'success' ? ['snackbar-success'] : ['snackbar-error'],
    });

  }
}
