import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/model/order';
import { OrderItem } from 'src/app/model/order-item';
import { OrderService } from 'src/app/services/order.service';
import { CalcSumBy } from 'src/app/enum/order/calc-sum-by.enum';

@Component({
  selector: 'app-choose-drinks',
  templateUrl: './choose-drinks.component.html',
  styleUrls: ['./choose-drinks.component.scss']
})
export class ChooseDrinksComponent implements OnInit {

  @Input() order: Order;
  @Input() drinks: OrderItem[];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.createForm();
  }

  async createForm() {    
    this.orderService.calc.subscribe(async calcSumBy =>{
      if(calcSumBy == CalcSumBy.drinks){
        console.log("passou aqui pai!");
        this.order.drinksValue = this.drinks.reduce((total, valor) => Number(total) + Number(valor.product.price * valor.amount), 0);    
      }
    });       
  }

}
