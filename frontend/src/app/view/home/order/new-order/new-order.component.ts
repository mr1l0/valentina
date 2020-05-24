import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OrderItem } from 'src/app/model/order-item';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { CalcSumBy } from 'src/app/enum/order/calc-sum-by.enum';
import { OrderService } from 'src/app/services/order.service';
import { PriceService } from 'src/app/services/price.service';
import { Price } from 'src/app/model/price';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  isLinear = false;
  order: Order = {}; 
  prices: Price[];

  foods: OrderItem[] = [];
  drinks: OrderItem[] = [];

  constructor(
    private productService: ProductService,
    public priceService: PriceService,
    private orderService: OrderService,
    private authService: AuthService    
  ) { }

  ngOnInit() {
    this.createForm();
  }
  
  async createForm() {
    this.order.userAdress = {};
    this.order.state = 'Agendado';
    this.order.user = this.authService.getLoggedUser();

    await this.loadData();
  }
  
  async loadData() {
    await this.getPrices();         
    await this.getOrderItens();    
  }

  async getPrices() {    
    await this.priceService.getAll().subscribe(( prices: Price[] ) => this.prices = prices );
  }

  async getOrderItens() {
    this.order.orderItem = [];
    await this.productService.getAll().subscribe(products => {              
      products.map((product: Product) => {        
        const orderItem: OrderItem = {
          product,
          amount: 0
        };        
        this.order.orderItem.push(orderItem);      
        if(product.group.name == 'Salgadinhos') {
          this.foods.push(orderItem);
        } else if(product.group.name == 'Bebidas') {
          this.drinks.push(orderItem);
        }
      });
      this.order.sumAmount = 100;
      this.orderService.calc.emit(CalcSumBy.sumAmount);      
      this.orderService.calc.emit(CalcSumBy.drinks);      
    });    
  }    

}
