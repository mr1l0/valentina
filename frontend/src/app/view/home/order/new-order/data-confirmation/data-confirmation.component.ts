import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-data-confirmation',
  templateUrl: './data-confirmation.component.html',
  styleUrls: ['./data-confirmation.component.scss']
})
export class DataConfirmationComponent implements OnInit {

  @Input() order: Order;

  constructor() { }

  ngOnInit() {
  }

}
