import { Component, OnInit, Input } from '@angular/core';
import { OfficeHourService } from 'src/app/services/office-hour.service';
import { OfficeHour } from 'src/app/model/office-hour';
import { OrderTime } from 'src/app/model/order-time';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-choose-date-hour',
  templateUrl: './choose-date-hour.component.html',
  styleUrls: ['./choose-date-hour.component.scss']
})
export class ChooseDateHourComponent implements OnInit {

  @Input() order: Order;

  semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
  data: Date;
  officeHours: OfficeHour[];
  orderTimes: OrderTime[];  

  constructor(protected officeHourService: OfficeHourService) { }

  ngOnInit() {
    this.getOfficeHours();
  }

  getOfficeHours() {
    this.officeHourService.getAll().subscribe(officeHours => {this.officeHours = officeHours; console.log(this.officeHours)});
  }

  changeDate() {
    this.orderTimes = [];    

    let selectedOfficeHour = this.officeHours.find(day => day.weekDay == this.data.getDay());
    for (let hour = selectedOfficeHour.startHourTurnOne; hour <= selectedOfficeHour.endHourTurnOne; hour++) {
      this.appendRequestTime(hour);
    }
    for (let hour = selectedOfficeHour.startHourTurnTwo; hour <= selectedOfficeHour.endHourTurnTwo; hour++) {
      this.appendRequestTime(hour);
    }
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