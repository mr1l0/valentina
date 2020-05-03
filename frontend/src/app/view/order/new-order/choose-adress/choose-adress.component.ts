import { Component, OnInit, Input } from '@angular/core';
import { UserAdress } from 'src/app/model/user-adress';
import { Order } from 'src/app/model/order';
import { UserAdressService } from 'src/app/services/user-adress.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-choose-adress',
  templateUrl: './choose-adress.component.html',
  styleUrls: ['./choose-adress.component.scss']
})
export class ChooseAdressComponent implements OnInit {

  @Input() order: Order;
  
  userAdresses: UserAdress[];

  constructor(
    protected userAdressService: UserAdressService,
    protected orderService: OrderService
  ) { }

  ngOnInit() {
    this.getAdresses();
  }

  getAdresses() {
    this.order.userAdress = null;
    this.userAdressService.getUserAdresses().subscribe(userAdresses => {
      this.userAdresses = userAdresses;
      if(this.userAdresses.length == 1) {        
        this.order.userAdress = this.userAdresses[0];
      }
    });
  }

  changeAdress() {
    this.order.userAdress = null;
  }

  submit() {
    console.log(this.order);
    this.orderService.upsert(this.order).subscribe(order => console.log(this.order));    
  }

}
