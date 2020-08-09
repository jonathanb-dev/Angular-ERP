import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { AuthGuard } from './guards/auth.guard';

// Pages
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

// Layouts
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { LayoutComponent } from './layouts/layout/layout.component';

// Components
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AccountDetailsComponent } from './components/register/account-details/account-details.component';
import { UserDetailsComponent } from './components/register/user-details/user-details.component';
import { UserPreferencesComponent } from './components/register/user-preferences/user-preferences.component';
import { CustomersComponent } from './components/customers/customers.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsCatalogComponent } from './components/products/products-catalog/products-catalog.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ProductFormComponent } from './components/products/product-form/product-form.component';
import { ProjectsComponent } from './components/projects/projects.component';

const appRoutes: Routes = [
  {
    path: '',
    component: EmptyLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
        children: [
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          { path: 'login', component: LoginComponent, canActivate: [IsLoggedInGuard] },
          {
            path: 'register',
            component: RegisterComponent,
            children: [
              { path: '', redirectTo: 'account-details', pathMatch: 'full' },
              { path: 'account-details', component: AccountDetailsComponent },
              { path: 'user-details', component: UserDetailsComponent },
              { path: 'user-preferences', component: UserPreferencesComponent }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'suppliers', component: SuppliersComponent },
      {
        path: 'products',
        component: ProductsPageComponent,
        children: [
          {
            path: '',
            component: ProductsComponent,
            children: [
              { path: '', component: ProductsCatalogComponent },
              { path: 'new', component: ProductFormComponent },
              { path: ':id', component: ProductDetailsComponent },
              { path: ':id/edit', component: ProductFormComponent }
            ]
          }
        ]
      },
      { path: 'projects', component: ProjectsComponent }
    ]
  },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
