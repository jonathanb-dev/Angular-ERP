import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';

import { PaginatedResult } from 'src/app/models/pagination';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products-catalog',
  templateUrl: './products-catalog.component.html',
  styleUrls: ['./products-catalog.component.scss']
})
export class ProductsCatalogComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getProducts().subscribe((data: PaginatedResult<Product[]>) => {
      this.products = data.result;
    });
  }
}
