import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllCakes(){
    return this._http.get('/cakes')
  }

  createCake(newCake: {baker: string; imageURL: string;}){
    return this._http.post('/cake', newCake)
  }

  createRating(newRating: {stars: string; comment: string;}, id){
    return this._http.post('/rating/'+id, newRating)
  }

  showCake(id){
    return this._http.get('/cake/'+id)
  }
}
