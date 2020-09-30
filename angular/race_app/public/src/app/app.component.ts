import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Dallas Virtual Racing Club';
  newUser: object;
  user: object;
  errors: boolean;
  errorMessages: any = [];
  constructor(
    private _httpService: HttpService,
    private router: Router
    ) {}
  
  ngOnInit(){
    this.newUser = {first_name: "", last_name: "", email: "", password: "", confirm_password: ""}
  }

  createUser(){
    this.errorMessages = [];
    let observable = this._httpService.createUser(this.newUser)
    observable.subscribe(user => {
      console.log('hello', user)
      //@ts-ignore
      if (user._id){
        console.log('YAY', user)
        this.router.navigate(['/dashboard'])
      }
      else {
        this.errors = true;
        //@ts-ignore
        console.log(user.errors)
        //@ts-ignore
        for (var key in user.errors){
          //@ts-ignore
          for (var properties in user.errors[key]){
            //@ts-ignore
            console.log(user.errors[key][properties].message)
            //@ts-ignore
            this.errorMessages.push(user.errors[key][properties].message)
          }
        }
      }
    })
  }

  logIn(){
    this.errorMessages = [];
    let observable = this._httpService.logIn(this.user)
    observable.subscribe(user => {
      //@ts-ignore
      if (user._id){
        console.log('YAY successful log in', user)
        this.router.navigate(['/dashboard'])
      }
    })
  }

}