import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// Custom modules
import { CoreModule } from './modules/core/core/core.module';
import { SharedModule } from './modules/shared/shared/shared.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';

// Layouts
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { LayoutComponent } from './layouts/layout/layout.component';

// Pages
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

// Components
import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CopyrightComponent } from './layouts/copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyLayoutComponent,
    LayoutComponent,
    NotFoundPageComponent,
    FooterComponent,
    CopyrightComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    AuthenticationModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
