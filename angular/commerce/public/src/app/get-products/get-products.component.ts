import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrls: ['./get-products.component.scss']
})
export class GetProductsComponent implements OnInit {
  products: Object;
  constructor(private _httpService: HttpService) { }

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