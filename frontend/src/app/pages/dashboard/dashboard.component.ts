import { Component, Injectable, inject } from '@angular/core';
import { AngularVlibras } from 'angular-vlibras';
import { Auth, authState} from  '@angular/fire/auth';
import { Router } from 'express';
import { Firestore } from 'firebase/firestore';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AngularVlibras],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {

  firestore: Firestore = inject(Firestore);
	auth: Auth = inject(Auth);
	user$ = authState(this.auth).pipe(filter(user  =>  user !== null), map(user  =>  user!));
	router: Router = inject(Router);

}
