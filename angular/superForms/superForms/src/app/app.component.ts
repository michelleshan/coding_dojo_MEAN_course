import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'superForms';
  person1 = {name:'Charlie', color:'red'};
  person2 = {name: 'Willy', color:'brown'};

  log1(){
    console.log(this.person1)
  }
}