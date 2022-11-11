import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  cart: Cart = {
    items: [
      {
        id: 1,

        name: 'Snickers',
        product: 'https://via.placeholder.com/150',

        price: 150,
        quantity: 1,
      },
    ]
  }

  dataSource: Array<CartItem> = [];

  displayedColumuns: string[] = [
    'product',
    'name',
    // 'price',
    // 'quantity',
    // 'total',
    // 'action'
  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.cart.items
  }

}
