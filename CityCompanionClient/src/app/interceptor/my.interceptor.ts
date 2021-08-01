import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,

} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class MyInterceptor implements HttpInterceptor {

  constructor(private _user:UserService) {}
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    // request=request.clone({headers:request.headers.set('Authorization',`${this.token}`)})
    // console.log(request.headers.get("Authorization"));
    
    let token = localStorage.getItem('token')
    console.log(token);
    if(token){
      this._user.loggedin=true
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      })
    }
    return next.handle(request);
  }
}
