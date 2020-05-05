import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NewOrderComponent } from "./order/new-order/new-order.component";
import { MyOrdersComponent } from "./order/my-orders/my-orders.component";
import { MainNavComponent } from "src/app/main-nav/main-nav.component";
import { FormatNumberPipe } from "src/app/pipes/format-number.pipe";
import { ChooseProductsComponent } from "./order/new-order/choose-products/choose-products.component";
import { ChooseDateHourComponent } from "./order/new-order/choose-date-hour/choose-date-hour.component";
import { ChooseAdressComponent } from "./order/new-order/choose-adress/choose-adress.component";
import { NewAdressComponent } from "./order/new-order/choose-adress/new-adress/new-adress.component";
import { ShowAdressComponent } from "./order/new-order/choose-adress/show-adress/show-adress.component";
import { SharedModule } from "src/app/shared/shared.module";
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    HomeComponent,
    NewOrderComponent,
    MyOrdersComponent,
    MainNavComponent,
    FormatNumberPipe,
    ChooseProductsComponent,
    ChooseDateHourComponent,
    ChooseAdressComponent,
    NewAdressComponent,
    ShowAdressComponent,
    HomePageComponent,
  ],
  imports: [SharedModule, CommonModule, HomeRoutingModule],
})
export class HomeModule {}
