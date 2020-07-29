import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular material
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// Pages
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavbarComponent } from './layouts/header/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  declarations: [
    NotFoundPageComponent,
    HomePageComponent,
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
