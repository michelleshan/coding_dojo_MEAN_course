import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
  }
  getAllTasks(){
    return this._http.get('/tasks')
  }

  showTask(id){
    return this._http.get('/task/'+id)
  }

  createTask(newTask: {title: string; description: string; complete: boolean;}){
    return this._http.post('/task', newTask)
  }

  updateTask(taskToUpdate: {title: string; description: string; complete: boolean;}){
    //@ts-ignore
    return this._http.put('/task/'+taskToUpdate._id, taskToUpdate)
  }

  deleteTask(taskToDestroy){
    return this._http.delete('/task/destroy/'+taskToDestroy._id)
  }
}


