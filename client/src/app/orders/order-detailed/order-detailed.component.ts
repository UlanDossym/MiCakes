import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';
import { IOrder } from 'src/app/shared/models/order';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrls: ['./order-detailed.component.scss'],
})
export class OrderDetailedComponent implements OnInit {
  order: IOrder;
  constructor(
    private bcService: BreadcrumbService,
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService
  ) {
    this.bcService.set('@orderDetails', '');
  }

  ngOnInit() {
    this.loadOrder();
  }
  private loadOrder() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.ordersService.getOrder(id).subscribe(
      (response: IOrder) => {
        this.order = response;
        this.bcService.set(
          '@orderDetails',
          'Order #' + this.order.id + ' - ' + this.order.status
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
