import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartItem } from './cart-item';
@Injectable({
  providedIn: 'root'
})
export class CartService {

    constructor(private http: HttpClient) {}
    serverURL = "http://127.0.0.1:8000/carts/"
    buy_cart(cart:CartItem[]) {
        return this.http.post(this.serverURL,cart);
      }
}
