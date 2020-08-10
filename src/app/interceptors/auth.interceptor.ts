import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!!this.authService.getToken()) {
      const headers = new HttpHeaders();

      headers.append('Authorization', `Bearer ${this.authService.getToken()}`)

      request = request.clone({
        headers: headers
      });
    }
    
    return next.handle(request);
  }
}
