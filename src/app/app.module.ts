import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

// Pages
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

// Layouts
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { LayoutComponent } from './layouts/layout/layout.component';

// Components
import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CopyrightComponent } from './layouts/copyright/copyright.component';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { RegisterComponent } from './components/register/register.component';
import { AccountDetailsComponent } from './components/register/account-details/account-details.component';
import { AccountDetailsFormComponent } from './components/register/account-details/account-details-form/account-details-form.component';
import { UserDetailsComponent } from './components/register/user-details/user-details.component';
import { UserDetailsFormComponent } from './components/register/user-details/user-details-form/user-details-form.component';
import { UserPreferencesComponent } from './components/register/user-preferences/user-preferences.component';
import { UserPreferencesFormComponent } from './components/register/user-preferences/user-preferences-form/user-preferences-form.component';
import { CustomersComponent } from './components/customers/customers.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsCatalogComponent } from './components/products/products-catalog/products-catalog.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ProductFormComponent } from './components/products/product-form/product-form.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    HomePageComponent,
    DashboardPageComponent,
    ProductsPageComponent,
    EmptyLayoutComponent,
    LayoutComponent,
    FooterComponent,
    CopyrightComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterComponent,
    AccountDetailsComponent,
    AccountDetailsFormComponent,
    UserDetailsComponent,
    UserDetailsFormComponent,
    UserPreferencesComponent,
    UserPreferencesFormComponent,
    CustomersComponent,
    SuppliersComponent,
    ProductsComponent,
    ProductsCatalogComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatBadgeModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
