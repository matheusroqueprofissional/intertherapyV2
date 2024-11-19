import { Component } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthGuard } from '../../auth.guard';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {

}
