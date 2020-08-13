import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Custom modules
import { AngularMaterialModule } from 'src/app/angular-material.module';

@NgModule({
  declarations: [],
  imports: [
    AngularMaterialModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    AngularMaterialModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
