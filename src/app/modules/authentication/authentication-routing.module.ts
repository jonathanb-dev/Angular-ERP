import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { IsLoggedInGuard } from 'src/app/guards/is-logged-in.guard';

// Layouts
import { EmptyLayoutComponent } from 'src/app/layouts/empty-layout/empty-layout.component';

// Pages
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';

// Components
import { LoginComponent } from './components/login/login.component';

const authenticationRoutes: Routes = [
  {
    path: '',
    component: EmptyLayoutComponent,
    children: [
      {
        path: '',
        component: AuthenticationPageComponent,
        children: [
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          { path: 'login', component: LoginComponent, canActivate: [IsLoggedInGuard] },
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(authenticationRoutes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
