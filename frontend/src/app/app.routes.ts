import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamComponent } from './pages/team/team.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'inicio', redirectTo: '' },
  { path: '', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login',component:LoginComponent},
  { path: 'admin',component:AdminPageComponent,canActivate:[AuthGuard]}
];
