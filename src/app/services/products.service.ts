import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PaginatedResult } from '../models/pagination';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(pageNumber?: number, itemsPerPage?: number): Observable<PaginatedResult<Product[]>> {
    const paginatedResult: PaginatedResult<Product[]> = new PaginatedResult<Product[]>();

    let params = new HttpParams();

    if (pageNumber && itemsPerPage) {
      params = params.append('pageNumber', pageNumber.toString());
      params = params.append('itemsPerPage', itemsPerPage.toString());
    }

    return this.http.get<Product[]>(environment.apiUrl + 'products', { observe: 'response', params })
      .pipe(
        map(response => {
          paginatedResult.result = response.body;
          
          if (response.headers.get('Pagination')) {
            paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
          }
          return paginatedResult;
        })
      );
  }
}
