import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Order } from 'src/app/model/order';
import { OrderItem } from 'src/app/model/order-item';
import { Price } from 'src/app/model/price';
import { PriceService } from 'src/app/services/price.service';
import { OrderService } from 'src/app/services/order.service';
import { CalcSumBy } from 'src/app/enum/order/calc-sum-by.enum';
import { ProgressSpinnerMode } from '@angular/material';

@Component({
  selector: 'app-choose-products',
  templateUrl: './choose-products.component.html',
  styleUrls: ['./choose-products.component.scss']
})
export class ChooseProductsComponent implements OnInit {

  @Input() order: Order;
  @Input() foods: OrderItem[];
  @Input() prices: Price[];  

  products: Product[];


  loaded = true;  
  mode: ProgressSpinnerMode = 'indeterminate';
  loading: boolean = false;


  constructor(    
    private orderService: OrderService        
  ) { } 

  ngOnInit() {
    this.createForm();
  }
  
  async createForm() {
    this.orderService.calc.subscribe(async calcSumBy =>{
      if(calcSumBy == CalcSumBy.itemAmount){
        await this.changeItemAmount();
      }else if(calcSumBy == CalcSumBy.sumAmount) {
        await this.changeSumAmount();
      }
      if(calcSumBy != CalcSumBy.drinks) {
        this.order.foodsValue = this.calcPrice();
      }
    });           
  }

  calcPrice(): any {
    this.prices = this.prices.sort((a, b) => (a.amount >= b.amount) ? -1 : 1);    

    let calcValue: number = 0;    
    this.prices.forEach(price => {      
      if(this.order.sumAmount >= price.amount)
        if(0 == calcValue){
          calcValue = price.value;
        }        
    });      
    return Number((Number(this.order.sumAmount) * calcValue).toFixed(2));;
  }

  onChangeSumAmount() {
    this.orderService.calc.emit(CalcSumBy.sumAmount);
  }

  changeItemAmount() {        
    this.order.sumAmount = this.foods.reduce((total, valor) => Number(total) + Number(valor.amount), 0);
  }

  changeSumAmount() {
    if (this.order.sumAmount < 20) {
      this.order.sumAmount = 20;
    }
    let productAmount = Number((Number(this.order.sumAmount) / this.foods.length).toFixed(0));
    this.foods.map(orderItem => orderItem.amount = productAmount);   
    if (this.foods.reduce((total, valor) => Number(total) + Number(valor.amount), 0) < this.order.sumAmount) {
      this.foods[0].amount = this.foods[0].amount + (Number(this.order.sumAmount) - this.foods.reduce((total, valor) => Number(total) + Number(valor.amount), 0));
    }
  }

  next() {
        
  }

}
