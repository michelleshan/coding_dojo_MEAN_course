import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }
    getForecast(id){
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=b66157ea785fccf267352db1d8921fd8`)
  }
}
