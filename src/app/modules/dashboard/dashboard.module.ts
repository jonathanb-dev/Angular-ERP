import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Custom modules
import { DashboardRoutingModule } from './dashboard-routing.module';

// Pages
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    RouterModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
