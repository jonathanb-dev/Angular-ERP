import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { AuthGuard } from 'src/app/guards/auth.guard';

// Layouts
import { LayoutComponent } from 'src/app/layouts/layout/layout.component';

// Pages
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '', // Lazy loading
        component: DashboardPageComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
