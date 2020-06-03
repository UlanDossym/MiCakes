import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent implements OnInit {
  @Input() subTotal: number;
  @Input() shipping: number;
  @Input() total: number;
  @Input() isCheckout = false;
  constructor() { }

  ngOnInit() {
  }

}
