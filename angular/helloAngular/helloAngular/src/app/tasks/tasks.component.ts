import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements OnInit {
  newTask: {
    title: string,
    description: string,
    complete: boolean
  }
  constructor(private _httpService: HttpService) {
    this.newTask = {title:"", description:"", complete: false}
  }

  ngOnInit() {
  }

  createTask(){
    this._httpService.createTask(this.newTask).subscribe(data => {
      console.log('We did it mom!')
    })
  }
}
