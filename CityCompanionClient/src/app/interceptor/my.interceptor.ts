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
  
  public token =localStorage.getItem('token')
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    // request=request.clone({headers:request.headers.set('Authorization',`${this.token}`)})
    // console.log(request.headers.get("Authorization"));
    
    console.log(this.token);
    let token = localStorage.getItem('token')
    if(this.token){
      this._user.loggedin=true
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${this.token}`)
      })
    }
    return next.handle(request);
  }
}
