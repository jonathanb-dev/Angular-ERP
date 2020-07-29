import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiBaseUrl: string = 'http://localhost:49938/api/auth/';

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.apiBaseUrl + 'login', model)
      .pipe(
        map((response: any) => {
          const token = response.token;
          
          if (token) {
            localStorage.setItem('token', token);
          }
        })
      );
  }
}
