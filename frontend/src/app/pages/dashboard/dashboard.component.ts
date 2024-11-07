import { Component, Injectable, inject } from '@angular/core';
import { AngularVlibras } from 'angular-vlibras';
import { Auth, authState} from  '@angular/fire/auth';
import { Router } from 'express';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AngularVlibras],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {


}
