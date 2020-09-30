import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productToUpdate: object;
  updateErrors: boolean;
  errorMessage: any;
  errorMessages: any = [];
  err: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params.id)
      this._httpService.showProduct(params.id).subscribe(data => {
        this.productToUpdate = data;
      })
    })
  }

  updateProduct(){
    this.errorMessages = [];
    let observable = this._httpService.updateProduct(this.productToUpdate)
    console.log('This is the product to update: ', this.productToUpdate)
    observable.subscribe(data => {
      console.log('Product update ', data)
      //@ts-ignore
      if (data._id){
        console.log('Update Successful')
        this._router.navigate(['/'])
      }
      else{
        console.log('HELLO ERRORSSSSSSS!')
        this.updateErrors = true;
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
    this._router.navigate(['/'])
  }
}
