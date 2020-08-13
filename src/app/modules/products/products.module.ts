import { NgModule } from '@angular/core';

// Custom modules
import { SharedModule } from '../shared/shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

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
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
