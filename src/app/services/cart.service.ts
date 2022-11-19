import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs'
import { Cart, CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] })

  constructor(private _snackBar: MatSnackBar) {

  }

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];
    const itemInCart = items.find(_item => _item.id === item.id);

    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({ items })
    this._snackBar.open('1 item added to cart.', 'Ok', { duration: 3000 });
  }

  getTotal(items: CartItem[]) {
    return items.reduce((prev, current) => prev + (current.price * current.quantity), 0); // eu que fiz, logica pode dar erro
  }

  clearCart(): void {
    this.cart.next({ items: [] });
    this._snackBar.open('Cart is cleared.', 'Ok', { duration: 3000 })
  }

  removeItem(id: number) {
    const items = this.cart.value.items.filter(item => item.id !== id);

    this.cart.next({ items });

    this._snackBar.open('1 item removed from cart', 'OK', {
      duration: 3000
    })
  }

  increseProduct(element: CartItem) {
    const item = this.cart.value.items.find(value => value.id === element.id);
    if (item && item.quantity > 0) item.quantity++;
  }

  decreseProduct(element: CartItem) {
    const item = this.cart.value.items.find(value => value.id === element.id);
    if (item) {
      if (element.quantity === 1) {
        this.removeItem(element.id)
      } else {
        item.quantity--;
      }
    }
  }

}
