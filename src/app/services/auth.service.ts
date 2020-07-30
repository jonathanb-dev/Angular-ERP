import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;

  constructor(private http: HttpClient) { }

  login(model: any) {
    this.isAuthenticated = true;
    return;
    return this.http.post(environment.apiUrl + 'auth/login', model)
      .pipe(
        map((response: any) => {
          const token = response.token;
          
          if (token) {
            localStorage.setItem('token', token);
            this.isAuthenticated = true;
          }
        })
      );
  }
}
