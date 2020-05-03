import { Injectable } from '@angular/core';
import { DefaultService } from './default.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAdress } from '../model/user-adress';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserAdressService extends DefaultService {

  constructor(
    public httpClient: HttpClient,  
    public authService: AuthService,
    protected router: Router

  ) {
    super(httpClient, authService, router);
  }

  getUserAdresses(): Observable<UserAdress[]> {
    return this.httpClient.get<UserAdress[]>(`${this.getUrl()}useradress/user/${this.authService.getLoggedUser().id}`, this.httpOptions).pipe(      
      retry(2),
      catchError(this.handleError)
    );
  }

  upsert(userAdress: UserAdress): Observable<UserAdress> {
    return this.httpClient.post<UserAdress>(`${this.getUrl()}useradress`, userAdress, this.httpOptions).pipe(
      //retry(2),
      catchError(this.handleError)
    )
  }
}
