import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(model: any) {
    localStorage.setItem('token', 'temp');
    return;
    return this.http.post(environment.apiUrl + 'auth/login', model)
      .pipe(
        map((response: any) => {
          const token = response.token;
          
          if (token) {
            localStorage.setItem('token', token);
          }
        })
      );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
