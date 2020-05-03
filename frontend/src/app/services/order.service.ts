import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { DefaultService } from './default.service';
import { Order } from '../model/order';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends DefaultService {

  constructor(
    public httpClient: HttpClient,  
    public authService: AuthService,
    protected router: Router

  ) {
    super(httpClient, authService, router);
  }

  getUrl(): string {
    return super.getUrl() + 'orders';
  }

  upsert(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(this.getUrl(), order, this.httpOptions).pipe(
      //retry(2),
      catchError(this.handleError)
    )
  }
}
