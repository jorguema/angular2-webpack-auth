import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { HomeComponent } from './structure/home/home.component';
import { CountryComponent } from './components/country/country.component';
import { PortComponent } from './components/port/port.component';

import { AuthService } from './services/auth.service';
import { LoginService } from './services/login.service';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, resolve: [LoginService] },  
  {
    path: '', component: HomeComponent, canActivate: [AuthService],
    children: [
      { path: '', component: CountryComponent },
      { path: 'ports', component: PortComponent }
    ]
  },
  { path: '**', redirectTo: '/' }
];

export const AppRoutes = RouterModule.forRoot(routes);
