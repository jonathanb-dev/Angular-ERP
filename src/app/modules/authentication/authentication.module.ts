import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Custom modules
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material.module';

// Pages
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';

// Components
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';

@NgModule({
  declarations: [
    AuthenticationPageComponent,
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    RouterModule,
    AuthenticationRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
