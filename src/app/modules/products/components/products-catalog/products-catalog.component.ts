import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { merge } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

// Angular material
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

// Services
import { ProductsService } from 'src/app/services/products.service';

// Models
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products-catalog',
  templateUrl: './products-catalog.component.html',
  styleUrls: ['./products-catalog.component.scss']
})
export class ProductsCatalogComponent implements OnInit, AfterViewInit {
  isFetchingProducts: boolean = false;
  displayedColumns: string[] = ['id', 'price', 'actions'];
  itemsPerPage: number = 20;
  itemsPerPageOptions: number[] = [10, 20, 30, 40, 50];
  products: Product[] = [];
  totalItems: number = 0;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0); // Reset current page number after sort
    
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        switchMap(() => {
          this.isFetchingProducts = true;
          return this.productsService.getProducts(this.paginator.pageIndex + 1, this.paginator.pageSize);
        }),
        map(paginatedResult => {
          this.isFetchingProducts = false;
          this.totalItems = paginatedResult.pagination.totalItems;

          return paginatedResult.result;
        })
      )
      .subscribe(products => this.products = products);
  }

  fetchProducts(): void {
    this.isFetchingProducts = true;
    this.productsService.getProducts(1, this.itemsPerPage)
      .pipe(
        map(paginatedResult => {
          this.isFetchingProducts = false;
          this.totalItems = paginatedResult.pagination.totalItems;
          return paginatedResult.result;
        })
      )
      .subscribe(products => {
        this.products = products;
      });
  }
}
