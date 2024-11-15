import { Component } from '@angular/core';
import { CanActivate } from '@angular/router';
import { authGuard } from '../../auth.guard';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {

}
