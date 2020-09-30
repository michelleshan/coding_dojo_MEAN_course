import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.scss']
})
export class SeattleComponent implements OnInit {
  id: string = '5809844'
  imgURL: string = 'https://images.pexels.com/photos/2539395/pexels-photo-2539395.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
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
