import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  orders: Order[];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.orderService.getAll().subscribe(orders => {this.orders = orders; console.log(this.orders)});
  }

}
