import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Order } from 'src/app/model/order';
import { ProductService } from 'src/app/services/product.service';
import { OrderItem } from 'src/app/model/order-item';
import { Price } from 'src/app/model/price';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-choose-products',
  templateUrl: './choose-products.component.html',
  styleUrls: ['./choose-products.component.scss']
})
export class ChooseProductsComponent implements OnInit {

  @Input() order: Order;

  products: Product[];
  prices: Price[];

  sumAmount: number = 0;
  sumValue: number = 0;

  constructor(
    public productService: ProductService,
    public priceService: PriceService
  ) { } 

  ngOnInit() {
    this.getPrices();
    this.getOrderItens();
  }

  getPrices() {    
    this.priceService.getAll().subscribe(( prices: Price[] ) => this.prices = prices );
  }

  calcPrice(): any {
    this.prices = this.prices.sort((a, b) => (a.amount >= b.amount) ? -1 : 1);    

    let calcValue: number = 0;    
    this.prices.forEach(price => {      
      if(this.sumAmount >= price.amount)
        if(0 == calcValue){
          calcValue = price.value;
        }        
    });      
    return Number((this.sumAmount * calcValue).toFixed(2));;
  }

  getOrderItens() {
    this.order.orderItem = [];
    this.productService.getAll().subscribe(( products: Product[] ) => {            
      products.map((product: Product) => {
        const orderItem: OrderItem = {
          product,
          amount: 0
        };
        this.order.orderItem.push(orderItem);
      });
      this.sumAmount = 100;
      this.changeSumAmount();  
    });    
  }

  changeItemAmount() {    
    this.sumAmount = this.order.orderItem.reduce((total, valor) => Number(total) + Number(valor.amount), 0);
    this.sumValue = this.calcPrice();
  }

  changeSumAmount() {
    let productAmount = Number((this.sumAmount / this.order.orderItem.length).toFixed(0));
    this.order.orderItem.map(orderItem => orderItem.amount = productAmount);
    this.sumValue = this.calcPrice();
  }

  next() {
        
  }

}
