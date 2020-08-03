import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular material
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// Pages
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

// Layouts
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { LayoutComponent } from './layouts/layout/layout.component';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NavbarComponent } from './layouts/header/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CopyrightComponent } from './layouts/copyright/copyright.component';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

@NgModule({
  declarations: [
    NotFoundPageComponent,
    HomePageComponent,
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    EmptyLayoutComponent,
    LayoutComponent,
    FooterComponent,
    CopyrightComponent,
    LoginComponent,
    LoginFormComponent,
    DashboardPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
