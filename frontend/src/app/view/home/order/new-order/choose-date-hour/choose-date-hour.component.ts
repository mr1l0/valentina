import { Component, OnInit, Input } from '@angular/core';
import { OfficeHour } from 'src/app/model/office-hour';
import { OrderTime } from 'src/app/model/order-time';
import { Order } from 'src/app/model/order';
import { MatExpansionPanel, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { OrderService } from 'src/app/services/order.service';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/helper/format-datepicker';

@Component({
  selector: 'app-choose-date-hour',
  templateUrl: './choose-date-hour.component.html',
  styleUrls: ['./choose-date-hour.component.scss'],
  viewProviders: [MatExpansionPanel],
  providers: [
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})
export class ChooseDateHourComponent implements OnInit {

  @Input() order: Order;
  
  data: Date;
  officeHours: OfficeHour[];
  orderTimes: OrderTime[];  

  constructor(    
    protected orderService: OrderService  
  ) { }

  ngOnInit() {

  }

  changeDate() {
    this.orderService.getFreHours(this.data).subscribe(orderTimes => this.orderTimes = orderTimes);
  }

  appendRequestTime(hour: number) {
    this.orderTimes.push({ hour, minutes: [ 0, 15, 30, 45 ]});           
  }

  clear() {
    this.order.scheduledTo = null;    
  }

  click(hour: number, minute: number) {
    const day = this.data.getDate();
    const month = this.data.getMonth() + 1;
    const year = this.data.getFullYear();
    
    this.order.scheduledTo = new  Date(`${year}-${month}-${day} ${hour}:${minute}:00`);
  }

}
