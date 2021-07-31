import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';   
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  logform:any
  loggedin=false
  baseurl="http://localhost:3000/"
  constructor(private _http:HttpClient) { }

  login(input:any):Observable<any>{
    return this._http.post(`${this.baseurl}user/login`,input)
  }
  logout(input:any):Observable<any>{

    return this._http.post(`${this.baseurl}user/logout`,input)

  }
  

}
