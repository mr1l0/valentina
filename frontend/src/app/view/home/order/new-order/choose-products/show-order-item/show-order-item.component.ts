import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OrderItem } from 'src/app/model/order-item';
import { OrderService } from 'src/app/services/order.service';
import { CalcSumBy } from 'src/app/enum/order/calc-sum-by.enum';

@Component({
  selector: 'app-show-order-item',
  templateUrl: './show-order-item.component.html',
  styleUrls: ['./show-order-item.component.scss']
})
export class ShowOrderItemComponent implements OnInit {

  @Input() orderItem: OrderItem;  

  imagePath: string;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.imagePath  = `./../../assets/products/${this.orderItem.product.name}.png`;
  }  

  changeItemAmount() {
    this.orderService.calc.emit(CalcSumBy.itemAmount);
  }

  plus() {
    this.orderItem.amount = this.orderItem.amount + 5;
    this.changeItemAmount();
  }

  minus() {
    this.orderItem.amount = this.orderItem.amount - 5;
    if(this.orderItem.amount < 0){
      this.orderItem.amount = 0;
    }
    this.changeItemAmount();
  }

}
