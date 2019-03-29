import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Headers, Http, Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public headers:Headers;
  constructor(public _http: Http) { 
    this.headers = new Headers({'Content-Type': 'application/json',});
    this.headers.append('Accept', 'application/json');
  }
  fillTypeAhead(url) {
    console.log(url)
    return this._http.get(url, {headers: this.headers}).pipe(map(data => {
      return data.json();
    }));

  }// doDelete
  
}
