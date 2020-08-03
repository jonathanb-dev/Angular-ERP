import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { AuthGuard } from './guards/auth.guard';

// Pages
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

// Layouts
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { LayoutComponent } from './layouts/layout/layout.component';

// Components
import { LoginComponent } from './components/login/login.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

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
          { path: 'login', component: LoginComponent, canActivate: [IsLoggedInGuard] }
        ]
      }
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardPageComponent }
    ]
  },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
