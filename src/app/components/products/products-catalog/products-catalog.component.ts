import { Component, OnInit, ViewChild } from '@angular/core';

// Angular material
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

// Services
import { ProductsService } from 'src/app/services/products.service';

// Models
import { PaginatedResult } from 'src/app/models/pagination';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products-catalog',
  templateUrl: './products-catalog.component.html',
  styleUrls: ['./products-catalog.component.scss']
})
export class ProductsCatalogComponent implements OnInit {
  displayedColumns: string[] = ['id', 'price'];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  initTable(products: Product[]): void {
    this.dataSource = new MatTableDataSource<Product>(products);
    this.setPaginator();
  }

  setPaginator(): void {
    this.dataSource.paginator = this.paginator;
  }

  fetchProducts(): void {
    this.productsService.getProducts().subscribe((data: PaginatedResult<Product[]>) => {
      this.initTable(data.result);
    });
  }
}
