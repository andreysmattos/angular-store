import { Component, EventEmitter, OnInit, Output } from '@angular/core';

type SORT = 'asc' | 'desc'


@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html'
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();

  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<SORT>();

  sort: SORT = 'asc';
  itemShowCount: number = 25;



  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: SORT): void {
    this.sort = newSort;
    this.sortChange.emit(newSort)
  }

  onItemsUpdated(count: number): void{
    this.itemShowCount = count;
    this.itemsCountChange.emit(count);
  }

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }

}
