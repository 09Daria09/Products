import { Injectable } from '@angular/core';
import { Product } from '../prosucts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  
  constructor(private http: HttpClient) {}
  addToCart(product: Product) {
    this.items.push(product);
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}