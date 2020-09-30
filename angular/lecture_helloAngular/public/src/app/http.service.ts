import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getTasks()
  }

  getTasks(){
    let tempObservable = this._http.get('/tasks')
    return tempObservable
    // tempObservable.subscribe(data => console.log('Got our tasks', data));
  }
  
  createTasks(task: { name: string;}) {
    let tempObservable = this._http.post('/tasks')
  }
}
