import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Order } from 'src/app/model/order';
import { ProductService } from 'src/app/services/product.service';
import { OrderItem } from 'src/app/model/order-item';
import { Price } from 'src/app/model/price';
import { PriceService } from 'src/app/services/price.service';
import { OrderService } from 'src/app/services/order.service';
import { CalcSumBy } from 'src/app/enum/order/calc-sum-by.enum';

@Component({
  selector: 'app-choose-products',
  templateUrl: './choose-products.component.html',
  styleUrls: ['./choose-products.component.scss']
})
export class ChooseProductsComponent implements OnInit {

  @Input() order: Order;

  products: Product[];
  prices: Price[];  

  loaded = false;

  constructor(
    public productService: ProductService,
    public priceService: PriceService,
    public orderService: OrderService
  ) { } 

  ngOnInit() {
    this.loadData();
  }
  
  async loadData() {
    
    this.orderService.calc.subscribe(async calcSumBy =>{
      if(calcSumBy == CalcSumBy.itemAmount){
        await this.changeItemAmount();
      }else if(calcSumBy == CalcSumBy.sumAmount) {
        await this.changeSumAmount();
      }
      this.order.sumValue = this.calcPrice();
    });
    
    await this.getPrices();
    await this.getOrderItens();
    this.loaded = true;
  }

  getPrices() {    
    this.priceService.getAll().subscribe(( prices: Price[] ) => this.prices = prices );
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

  getOrderItens() {
    this.order.orderItem = [];
    this.productService.getAll().subscribe(products => {            
      products.map((product: Product) => {
        const orderItem: OrderItem = {
          product,
          amount: 0
        };
        this.order.orderItem.push(orderItem);
      });
      this.order.sumAmount = 100;
      this.orderService.calc.emit(CalcSumBy.sumAmount);
    });    
  }  

  onChangeSumAmount() {
    this.orderService.calc.emit(CalcSumBy.sumAmount);
  }

  changeItemAmount() {        
    this.order.sumAmount = this.order.orderItem.reduce((total, valor) => Number(total) + Number(valor.amount), 0);    
  }

  changeSumAmount() {
    if (this.order.sumAmount < 20) {
      this.order.sumAmount = 20;
    }
    let productAmount = Number((Number(this.order.sumAmount) / this.order.orderItem.length).toFixed(0));
    this.order.orderItem.map(orderItem => orderItem.amount = productAmount);   
    if (this.order.orderItem.reduce((total, valor) => Number(total) + Number(valor.amount), 0) < this.order.sumAmount) {
      this.order.orderItem[0].amount = this.order.orderItem[0].amount + (Number(this.order.sumAmount) - this.order.orderItem.reduce((total, valor) => Number(total) + Number(valor.amount), 0));
    }
  }

  next() {
        
  }

}
