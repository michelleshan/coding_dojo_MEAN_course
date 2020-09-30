import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Restful Tasks API';
  tasks: any = [];
  task: any;
  newTask: any;
  taskToUpdate: any;
  edit: boolean = false;
  taskToDelete: any;
  constructor(private _httpService: HttpService, private _router: Router) {
  }

  ngOnInit(){
    this.newTask = {title:"", description:"", complete:"false"}
    this.getAllTasks()
  }
  
  getAllTasks(){
    let observable = this._httpService.getAllTasks();
    observable.subscribe(data => {
      this.tasks = data;
    })
  }

  createTask(){
    this._httpService.createTask(this.newTask).subscribe(data => {
      this.tasks.push(data);
      console.log('Created task!')
      this.newTask = {title:"", description:"", complete:"false"}
    })
  }

  updateTask(){
    this._httpService.updateTask(this.taskToUpdate).subscribe(updatedTask => {
      console.log('We did it mom!',updatedTask)
    })
  }

  deleteTask(task){
    this.taskToDelete = task;
    this._httpService.deleteTask(this.taskToDelete).subscribe(data => {
      console.log('deleted task', data)
      this.getAllTasks()
    })
  }

  onClickEdit(task): void {
    this.taskToUpdate = task;
    this.edit = true;
  }

}
