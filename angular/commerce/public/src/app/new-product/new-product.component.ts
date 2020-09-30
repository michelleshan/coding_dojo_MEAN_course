import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  newProduct: object;
  creationErrors: boolean;
  errorMessage: any;
  errorMessages: any = [];
  constructor(
    private _httpService: HttpService,
    private router: Router
    ) { }

  ngOnInit() {
    this.newProduct = { name: "", quantity: "", price: ""}
  }

  createProduct(){
    this.errorMessages = [];
    let observable = this._httpService.createProduct(this.newProduct)
    observable.subscribe(data => {
      console.log('New product creation ', data)
      //@ts-ignore
      if (data._id){
        console.log('YAYYYYY')
        this.router.navigate(['/'])
      }
      else {
        this.creationErrors = true;
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

  onClickReset(){
    this.router.navigate(['/'])
  }
}
