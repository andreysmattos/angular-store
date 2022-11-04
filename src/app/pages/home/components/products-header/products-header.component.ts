import { Component, OnInit } from '@angular/core';

type SORT = 'asc' | 'desc'


@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html'
})
export class ProductsHeaderComponent implements OnInit {

  sort: SORT = 'asc';



  constructor() { }

  ngOnInit(): void {
  }

  onSorteUpdated(newSort: SORT): void {
    this.sort = newSort;
  }

}
