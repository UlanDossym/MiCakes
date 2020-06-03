import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket, IBasketItem } from '../../models/basket';
import { Observable } from 'rxjs';
import { IOrderItem } from '../../models/order';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss'],
})
export class BasketSummaryComponent implements OnInit {
  @Output() decrement: EventEmitter<IBasketItem> = new EventEmitter<
    IBasketItem
  >();
  @Output() increment: EventEmitter<IBasketItem> = new EventEmitter<
    IBasketItem
  >();
  @Input() isBasket = true;
  @Input() isOrder = false;
  @Input() items: IBasketItem[] | IOrderItem[] = [];
  @Output() remove: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  constructor() {}

  ngOnInit() {
  }
  decrementItemQuantity(item: IBasketItem) {
    this.decrement.emit(item);
  }
  incrementItemQuantity(item: IBasketItem) {
    this.increment.emit(item);
  }
  removeBasketItem(item: IBasketItem) {
    this.remove.emit(item);
  }
}