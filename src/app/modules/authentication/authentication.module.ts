import { NgModule } from '@angular/core';

// Custom modules
import { SharedModule } from '../shared/shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';

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
    SharedModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
