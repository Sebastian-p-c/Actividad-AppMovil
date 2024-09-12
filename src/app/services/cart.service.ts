import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  constructor() {

    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }

  addToCart(item: any) {
    this.cart.push(item);
    this.saveCart();
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    this.saveCart(); 
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
