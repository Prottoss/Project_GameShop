import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Interceptor called");
    const id_token = localStorage.getItem('id_token');
    if(id_token == null){
      return next.handle(request);
    }
    if (request.url.includes('AWSAccessKeyId')) {
      return next.handle(request);
    }
    const cloned = request.clone( {
      headers: request.headers.set("Authorization", "Bearer "+ id_token)
    })
    return next.handle(cloned);
  }
}
