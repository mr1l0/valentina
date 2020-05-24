import { Component, OnInit, Input } from '@angular/core';
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
  @Input() increment: number = 5;

  imagePath: string;

  CalcSumBy = CalcSumBy;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.imagePath  = `./../../assets/products/${this.orderItem.product.name}.png`;
  }  

  changeItemAmount(calcSumBy: CalcSumBy) {
    console.log(calcSumBy);
    this.orderService.calc.emit(calcSumBy);
  }

  plus(calcSumBy: CalcSumBy) {
    this.orderItem.amount = this.orderItem.amount + this.increment;
    this.changeItemAmount(calcSumBy);
  }

  minus(calcSumBy: CalcSumBy) {
    this.orderItem.amount = this.orderItem.amount - this.increment;
    if(this.orderItem.amount < 0){
      this.orderItem.amount = 0;
    }
    this.changeItemAmount(calcSumBy);
  }

}
