import { Injectable } from '@angular/core';
import { DefaultService } from './default.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OfficeHour } from '../model/office-hour';
import { retry, catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OfficeHourService extends DefaultService {

  constructor(
    public httpClient: HttpClient,
    public authService: AuthService,
    protected router: Router
  ) {
    super(httpClient, authService, router);
  }

   getUrl(): string {
     return super.getUrl() + 'officehour';
   }

  getAll(): Observable<OfficeHour[]> {        
    return this.httpClient.get<OfficeHour[]>(this.getUrl(), this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }   
}
