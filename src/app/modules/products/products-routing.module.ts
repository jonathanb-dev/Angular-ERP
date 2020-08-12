import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { AuthGuard } from 'src/app/guards/auth.guard';

// Layouts
import { LayoutComponent } from 'src/app/layouts/layout/layout.component';

// Components
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductsCatalogComponent } from './components/products-catalog/products-catalog.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

const productsRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '', // Lazy loading
        component: ProductsPageComponent,
        children: [
          { path: '', redirectTo: 'catalog', pathMatch: 'full' },
          { path: 'catalog', component: ProductsCatalogComponent },
          { path: 'new', component: ProductFormComponent },
          { path: ':id', component: ProductDetailsComponent },
          { path: ':id/edit', component: ProductFormComponent }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(productsRoutes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
