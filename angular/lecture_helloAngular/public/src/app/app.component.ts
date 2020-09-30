import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello Class';
  favoriteColor = 'Red';
  tasks: any = [];

  constructor(private_httpService: HttpService){
    private_httpService.getTasks().subscribe(data => {
      console.log('get tasks in component: ',data)
      this.tasks = data;
    })
  }

  onClickAddTask(){
    // console.log('button clicked!');
    this.tasks.push({name:'sweep kitchen floor'})
  }

}