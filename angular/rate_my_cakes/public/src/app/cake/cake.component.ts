import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.scss']
})
export class CakeComponent implements OnInit {
  cake: any; 
  @Input()cakeToShow
  // { baker: string, imageURL: string, ratings: Array<Object> }
  id: any;
  ratings: any;
  avg: number;
  stars: any;
  avgRating: any;

  constructor(private _httpService: HttpService, private router: Router, private _route: ActivatedRoute) {
  }

  ngOnInit(){
    // this._route.params.subscribe(params => {
    //   this.id = (params.id);
    this.showCake();
    // })

  }

  showCake(){
    this.id = this.cakeToShow._id
    this.ratings = this.cakeToShow.ratings
    // let observable = this._httpService.showCake(this.id)
    // observable.subscribe(data => {
    //   console.log('Here is THE cake: ', data)
    //   this.cake = data;
    //   this.ratings = this.cake.ratings;
    // })
  };
}
