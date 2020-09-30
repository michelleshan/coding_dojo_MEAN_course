import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.scss']
})
export class BurbankComponent implements OnInit {
  id: string = '5331836'
  imgURL: string = 'https://images.pexels.com/photos/2984347/pexels-photo-2984347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  humidity: any;
  avgTemp: any;
  highTemp: any;
  lowTemp: any;
  status: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getForecast(this.id);
  }
  getForecast(id){
    let observable = this._httpService.getForecast(this.id)
    observable.subscribe(data => {
      console.log(data)
      this.humidity = data['main'].humidity;
      this.avgTemp = data['main'].temp
      this.highTemp = data['main'].temp_max;
      this.lowTemp = data['main'].temp_min;
      this.status = data['weather'][0].description;
    })
  }
}
