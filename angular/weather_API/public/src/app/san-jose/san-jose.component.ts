import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.scss']
})
export class SanJoseComponent implements OnInit {
  id: string = '5392171'
  imgURL: string = 'https://images.pexels.com/photos/4449867/pexels-photo-4449867.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
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
