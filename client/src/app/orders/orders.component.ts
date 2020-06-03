import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { IOrder } from '../shared/models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: IOrder[];
  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    this.getOrders();
  }
  private getOrders() {
    this.ordersService.getOrders().subscribe(
      (response: IOrder[]) => {
        this.orders = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
