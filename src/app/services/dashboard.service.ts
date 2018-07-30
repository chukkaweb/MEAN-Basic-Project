import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DashboardService {
constructor(private _http: HttpClient) { }
public mysqlData(): any {
var obj = window.localStorage.getItem('login_details'); // here login_details_details is the  table name
var token = (JSON.parse(obj)).token;
return this._http.post('http://localhost:8080/mysql',
{'token': token});
  }
  public mongodb(): any {
    var obj = window.localStorage.getItem('login_details'); // here login_details_details is the  table name
    var token = (JSON.parse(obj)).token;
    return this._http.post('http://localhost:8080/mongodb',
    {'token': token});
      }
      public staticFile(): any {
        var obj = window.localStorage.getItem('login_details'); // here login_details is the  table name
        var token = (JSON.parse(obj)).token;
        return this._http.post('http://localhost:8080/static',
        {'token': token});
          }
}
