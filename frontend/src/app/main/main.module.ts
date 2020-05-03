import { NgModule } from '@angular/core';

import { Routes, RouterModule } from "@angular/router";
import { UserGuard } from '../guards/user.guard';
import { HomeComponent } from '../view/home/home.component';
import { NewOrderComponent } from '../view/order/new-order/new-order.component';
import { MyOrdersComponent } from '../view/order/my-orders/my-orders.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { MatToolbarModule, MatIconModule, MatStepperModule, MatDatepickerModule, MatNativeDateModule, MatExpansionModule, MatListModule, MatSnackBarModule, MatSidenavModule, MatCommonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { FormatNumberPipe } from '../pipes/format-number.pipe';
import { ChooseProductsComponent } from '../view/order/new-order/choose-products/choose-products.component';
import { ChooseDateHourComponent } from '../view/order/new-order/choose-date-hour/choose-date-hour.component';
import { ChooseAdressComponent } from '../view/order/new-order/choose-adress/choose-adress.component';
import { NewAdressComponent } from '../view/order/new-order/choose-adress/new-adress/new-adress.component';
import { ShowAdressComponent } from '../view/order/new-order/choose-adress/show-adress/show-adress.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';
import { NewUserComponent } from '../view/user/new-user/new-user.component';
import { LoginComponent } from '../view/login/login.component';

const routes: Routes = [
    {        
        path: '', 
        component: HomeComponent,
        canActivateChild: [UserGuard],
        children: [            
            { path: 'new-request', component: NewOrderComponent },
            { path: 'my-requests', component: MyOrdersComponent }
        ]
    }
]

@NgModule({
    declarations: [    
            
        LoginComponent, 
        NewUserComponent,
        HomeComponent,
        NewOrderComponent,
        MyOrdersComponent,
        MainNavComponent,
        FormatNumberPipe,        
        ChooseProductsComponent,
        ChooseDateHourComponent,
        ChooseAdressComponent,
        NewAdressComponent,
        ShowAdressComponent

    ],
    imports: [             
        RouterModule.forChild(routes),
        SharedModule,        
    ],
    exports: [
        RouterModule
    ]
  })
  export class MainModule { }
  