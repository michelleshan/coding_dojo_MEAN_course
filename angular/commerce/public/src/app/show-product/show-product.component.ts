import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent implements OnInit {
  product: object
  deleteErrors: boolean;
  errorMessages: any = [];
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params.id)
      this._httpService.showProduct(params.id).subscribe(data => {
        console.log('Here is the product details', data)
        this.product = data;
      })
    })
  }

  onClickDelete(product){
    this.errorMessages = [];
    if(product.quantity == 0){
      this.deleteProduct(product);
    }
    else{
      this.deleteErrors = true;
      this.errorMessages.push('To delete a product, the Qty must be 0')
    }
  }

  deleteProduct(product){
    let observable = this._httpService.deleteProduct(product._id)
    observable.subscribe(data => {
      console.log('Successfully deleted product ',data)
      this._router.navigate(['/'])
    })
  }
}
