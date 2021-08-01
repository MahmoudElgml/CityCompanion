import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  baseurl="http://localhost:3000/"
  constructor(private _http:HttpClient) { }

  getallcountries():Observable<any>{
   return this._http.get(`${this.baseurl}country/getall`)
  }
}
