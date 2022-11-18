import { Component, OnInit } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  template: `
  <app-header [cart]="cart"> </app-header>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  cart: Cart = { items: [] };

  constructor(public cartService: CartService) {

  }

  ngOnInit() {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
  }

}
