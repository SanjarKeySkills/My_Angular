import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, delay, tap} from "rxjs";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {IProduct} from "../models/product";
import {products} from "../data/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  products: IProduct[] = []

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: {
          limit: 7
        }
      })
    })
      .pipe(
        delay(400),
        tap(products => this.products = products)
      )
  }
}

const source = new Observable((subscriber) => {
    subscriber.next(1)
    subscriber.next(2)
    subscriber.next(3)
    subscriber.complete()
})

console.log('start')
source.subscribe({
  next: console.log,
  complete: () => console.log('DONE FN')
})
console.log('finish')
