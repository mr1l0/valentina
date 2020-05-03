import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  //httpOptions = httpOptions;

  // Headers
  httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',  
    Authorization: this.authService.user.token//`${localStorage.getItem('access_token')} `, 
  })
}

  constructor(
    protected httpClient: HttpClient,
    public authService: AuthService,
    protected router: Router
  ) { }

  getUrl(): string {
    return 'http://localhost:3000/';
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      // if(error.status == 401){
      //   console.log('Piá, to tentando mandar pro login...');        
      //   this.router.parseUrl("login");
      // }
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
    
}
