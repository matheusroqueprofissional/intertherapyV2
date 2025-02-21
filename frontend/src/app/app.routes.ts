import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { TeamComponent } from './pages/team/team.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AuthGuard } from './auth.guard';
import { UpdateEmployersComponent } from './pages/admin-page/update-employers/update-employers.component';
import { UpdateTreatmentsComponent } from './pages/admin-page/update-treatments/update-treatments.component';
import { SendImagesComponent } from './pages/admin-page/send-images/send-images.component';
import { ServicesComponent } from './pages/services/services.component';
import { FisioterapiaComponent } from './pages/services/subpages/fisioterapia/fisioterapia.component';
import { FonoaudiologiaComponent } from './pages/services/subpages/fonoaudiologia/fonoaudiologia.component';
import { PsicologiaComponent } from './pages/services/subpages/psicologia/psicologia.component';
import { PsicomotricidadeComponent } from './pages/services/subpages/psicomotricidade/psicomotricidade.component';
import { PsicopedagogiaComponent } from './pages/services/subpages/psicopedagogia/psicopedagogia.component';
import { TerapiaOcupacionalComponent } from './pages/services/subpages/terapia-ocupacional/terapia-ocupacional.component';

export const routes: Routes = [
  { path: 'inicio', redirectTo: '' },
  { path: '', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'services',
    component: ServicesComponent,
    children: [
        {path:'Fisioterapia',component:FisioterapiaComponent},
        {path:'Terapia Ocupacional',redirectTo:'TerapiaOcupacional'},
        {path:'TerapiaOcupacional',component:TerapiaOcupacionalComponent},
        {path:'Fonoaudiologia',component:FonoaudiologiaComponent},
        {path:'Psicomotricidade',component:PsicomotricidadeComponent},
        {path:'Psicologia',component:PsicologiaComponent},
        {path:'Psicopedagogia',component:PsicopedagogiaComponent},
    ]
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
