import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  createUser(newUser){
    return this._http.post('/user', newUser)
  }

  createRace(newRace){
    return this._http.post('/race', newRace)
  }

  logIn(user){
    return this._http.get('/session'+user._id)
  }

  getRaces(){
    return this._http.get('/race')
  }
}
