import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  isLinear = false;
  order: Order = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.order.userAdress = {};
    this.order.state = 'Agendado';
    this.order.user = this.authService.getLoggedUser();
  }

}
