import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../model/user';
import { catchError, retry } from 'rxjs/operators';

// Headers
const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = httpOptions;

  url: string = 'http://localhost:3000/users';

  getAll(): Observable<User> {
    console.log('Mandou consultar mestre?');
    return this.httpClient.get<User>(this.url, this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }  

  getById(id: number): Observable<User> {
    console.log('Mandou consultar mestre?');
    return this.httpClient.get<User>(this.url + '/' + id, this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }  

  upsertUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.url, user, this.httpOptions).pipe(
      //retry(2),
      catchError(this.handleError)
    )
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
