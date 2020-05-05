import { Injectable, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, EventEmitter } from '@angular/core';
import { User } from '../model/user';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })
  }

  user: User;
  url: string = 'http://localhost:3000/auth/'
  urlLogin: string = this.url + 'login';  
  urlVerify: string = this.url + 'verify/';

  showMenu = new EventEmitter<boolean>();

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  auth(user: User, saveUser: boolean): Observable<User> {
    console.log(user);
    return this.httpClient.post<User>(this.urlLogin, user).pipe(tap(user => {
      this.user = user;
      if (saveUser) {
        this.user.login = '';
        this.user.password = '';
        localStorage.setItem('user_info', JSON.stringify(this.user));
      }      
      this.showMenu.emit(true);
    }));
  }

  vevrify(login: string): Observable<boolean> {
    return this.httpClient.get<boolean>(this.urlVerify + login);
  }

  getLoggedUser() {
    if (!this.user) {
      const strUser: string = localStorage.getItem('user_info');
      if (strUser !== '') {
        this.user = JSON.parse(strUser);
      }
    }    
    if(this.user) {      
      this.showMenu.emit(true);
      return this.user;
    } 
    this.logout();
    
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem('user_info');    
    this.showMenu.emit(false);
    this.router.navigateByUrl("/login");
    console.log('mas vc mandou sair tio');
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
