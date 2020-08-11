import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Custom modules
import { ProductsRoutingModule } from './products-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material.module';

// Pages
import { ProductsPageComponent } from './pages/products-page/products-page.component';

// Components
import { ProductsCatalogComponent } from './components/products-catalog/products-catalog.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductsCatalogComponent,
    ProductDetailsComponent,
    ProductFormComponent,
  ],
  imports: [
    RouterModule,
    ProductsRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
