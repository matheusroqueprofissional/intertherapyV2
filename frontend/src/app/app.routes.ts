import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamComponent } from './pages/team/team.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AuthGuard } from './auth.guard';
import { OccupationalTherapyComponent } from './pages/services/occupational-therapy/occupational-therapy.component';
import { PhysiotherapyComponent } from './pages/services/physiotherapy/physiotherapy.component';
import { PsychologyComponent } from './pages/services/psychology/psychology.component';
import { PsychomotricityComponent } from './pages/services/psychomotricity/psychomotricity.component';
import { PsychopedagogyComponent } from './pages/services/psychopedagogy/psychopedagogy.component';
import { SpeechTherapyComponent } from './pages/services/speech-therapy/speech-therapy.component';
import { UpdateEmployersComponent } from './pages/admin-page/update-employers/update-employers.component';
import { UpdateTreatmentsComponent } from './pages/admin-page/update-treatments/update-treatments.component';
import { SendImagesComponent } from './pages/admin-page/send-images/send-images.component';

export const routes: Routes = [
  { path: 'inicio', redirectTo: '' },
  { path: '', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'services',
    component: ServicesComponent,
    children: [
      {
        path: '',
        redirectTo: 'Fisioterapia',
        pathMatch: 'full',
      },
      {
        path: 'Fisioterapia',
        component: PhysiotherapyComponent,
      },
      {
        path: 'Terapia Ocupacional',
        component: OccupationalTherapyComponent,
      },
      {
        path: 'Fonoaudiologia',
        component: SpeechTherapyComponent,
      },
      {
        path: 'Psicomotricidade',
        component: PsychomotricityComponent,
      },
      {
        path: 'Psicologia',
        component: PsychologyComponent,
      },
      {
        path: 'Psicopedagogia',
        component: PsychopedagogyComponent,
      },
    ],
  },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminPageComponent,
    children: [
      {
        path: 'Carousel dashboard management',
        redirectTo:'images Manager'
      },
      {
        path:"Treatments management",
        redirectTo:'treatments Manager'
      },
      {
        path:"Employers management",
        redirectTo:"employers Manager"
      },
      {
        path: 'employers Manager',
        component: UpdateEmployersComponent,
      },
      {
        path: 'treatments Manager',
        component: UpdateTreatmentsComponent,
      },
      {
        path: 'images Manager',
        component: SendImagesComponent,
      },
    ],
    canActivate: [AuthGuard],
  },
];
