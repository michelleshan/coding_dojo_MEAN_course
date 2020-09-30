import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chatApp';
  userName: string;
  userNameSet: boolean;
  color: string;

  constructor(){
    this.color = null
  }

  ngOnInit(){
    this.userNameSet = false;
    this.userName = "";
  }

  setUserName(){
    if (this.userName.length >= 2){
      this.userNameSet = true;
    }
  }
}
