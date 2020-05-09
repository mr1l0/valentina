import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.scss']
})
export class ShowOrderComponent implements OnInit {

  @Input() order: Order;

  constructor() { }

  ngOnInit() {
  }

}
