import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';
import productsData from './products.json';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {}

  getProductsSmall(): Observable<Product[]> {
    console.log('prod', productsData);
    return of(<any>productsData);
  }
}
