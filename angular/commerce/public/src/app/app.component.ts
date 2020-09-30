import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Commerce Manager';
  products: Object;
  constructor(private _httpService: HttpService){
    
  }

  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    let observable = this._httpService.getProducts()
    observable.subscribe(data => {
      console.log('Here are the products ',data)
      this.products = data;
    })
  }
}
