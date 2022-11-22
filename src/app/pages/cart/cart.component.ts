import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  cart: Cart = {
    items: []
  }

  dataSource: Array<CartItem> = [];

  displayedColumuns: string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];

  constructor(public cartService: CartService, private http: HttpClient) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe(_cart => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });

  }

  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart()
  }

  onRemoveItem(id: number) {
    return this.cartService.removeItem(id);
  }

  onIncreseProduct(element: CartItem) {
    this.cartService.increseProduct(element);
  }

  onDecreseProduct(element: CartItem) {
    this.cartService.decreseProduct(element);
  }

  onCheckout(): void {
    this.http.post('http://localhost:4242/checkout', {
      items: this.cart.items,
    }).subscribe(async (res: any) => {
      let stripe = await loadStripe('pk_test_51M6vjLG9mvinKJZQTYkR9NP4jCnHm2XZJr7NVgjuH87FUPvjXNaecRNh5VtnGmtxrRK1sZQPWhMFlUQktFFf1Dcp009NCZaD40');
      stripe?.redirectToCheckout({
        sessionId: res.id
      });
    });
  }

}
