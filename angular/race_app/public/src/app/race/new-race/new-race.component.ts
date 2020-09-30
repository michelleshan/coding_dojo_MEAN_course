import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-race',
  templateUrl: './new-race.component.html',
  styleUrls: ['./new-race.component.scss']
})
export class NewRaceComponent implements OnInit {
  errorMessages: any = [];
  errors: boolean;
  newRace: object;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    ) { }

  ngOnInit() {
    this.newRace = {date: "", race_name: "", distance: ""}
  }

  createRace(){
    this.errorMessages = [];
    let observable = this._httpService.createRace(this.newRace)
    observable.subscribe(data => {
      console.log('New race creating ', data)
      //@ts-ignore
      if (race._id){
        console.log('YAY NEW RACE')
        this._router.navigate(['/'])
      }
      else{
        this.errors = true;
        //@ts-ignore
        console.log(data.errors)
        //@ts-ignore
        for (var key in data.errors){
          //@ts-ignore
          console.log(data.errors[key].message)
          //@ts-ignore
          this.errorMessages.push(data.errors[key].message)
        }
      }
    })
  }

}
