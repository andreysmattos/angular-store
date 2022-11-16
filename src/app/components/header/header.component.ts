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


  getTotal(items: CartItem[]){
    return items.reduce((prev, current) => prev + (current.price * current.quantity) ,0); // eu que fiz, logica pode dar erro
  }

  constructor(public cartServe: CartService) { }



}
