import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-get-races',
  templateUrl: './get-races.component.html',
  styleUrls: ['./get-races.component.scss']
})
export class GetRacesComponent implements OnInit {
  user: object;
  races: any = [];
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getUserData();
    this.getRaces();
  }

  getUserData(){
    this._route.params.subscribe((params: Params) => {
      console.log(params.id)
      this._httpService.logIn(params.id).subscribe(data => {
        console.log('We logged in session', data)
        this.user = data;
      })
    })
  }

  getRaces(){
    let observable = this._httpService.getRaces()
    observable.subscribe(data => {
      console.log('Here are the races ',data)
      this.races = data;
    })
  }

}
