import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { DefaultService } from './default.service';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProductService extends DefaultService {

  constructor(
    public httpClient: HttpClient,
    public authService: AuthService,
    protected router: Router

  ) {
    super(httpClient, authService, router);
  }

   getUrl(): string {
     return super.getUrl() + 'products';
   }

  getAll(): Observable<Product[]> {        
    return this.httpClient.get<Product[]>(this.getUrl(), this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }    
}
