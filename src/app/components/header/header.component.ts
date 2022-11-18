import { Component, Input } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  private _cart: Cart = { items: [] }
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = this._cart.items.reduce((prev, current) => prev + current.quantity, 0); // eu que fiz, logica pode dar erro
    console.log('this.itemsQuantity', this.itemsQuantity)

  }

  constructor(public cartService: CartService) {
    console.log('cartService', cartService)
  }


  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    console.log('xd')
    this.cartService.clearCart();
  }





}
