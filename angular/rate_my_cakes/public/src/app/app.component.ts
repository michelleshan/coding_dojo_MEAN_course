import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rate My Cakes';
  cakes: any = [];
  cake: any;
  ratings: any = [];
  newCake: { baker: string; imageURL: string; };
  newRating: { stars: number; comment: string; };
  id: string;
  showcake: boolean;
  cakeToShow: any;
  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    this.getAllCakes();
    this.newCake = { baker:"", imageURL:"" }
    this.showcake = false;
  }
  
  getAllCakes(){
    let observable = this._httpService.getAllCakes()
    observable.subscribe(data => {
      console.log('Here are all the cakes: ', data)
      this.cakes = data;
    })
  };

  createCake(){
    let observable = this._httpService.createCake(this.newCake)
    observable.subscribe(newCake => {
      this.cakes.push(newCake)
      console.log('Successfully created a new cake: ', newCake)
    })
  }

  createRating(event,id){
    let newRating = {stars: event.target.stars.value, comment: event.target.comment.value}
    let observable = this._httpService.createRating(newRating,id)
    observable.subscribe(anewRating => {
      console.log('Successfully submitted a new rating: ', anewRating)
    })
  }

  showCake(cake){
    let sum = 0;
    let avg = 0;
    for (let i=0; i < cake.ratings.length; i++){
      sum += Number(cake.ratings[i].stars)
      avg = sum/cake.ratings.length;
      cake.avgRating = avg.toFixed(1);
    }
    this.showcake = false;
    this.cakeToShow = cake
    this.showcake = true;
  }
}
