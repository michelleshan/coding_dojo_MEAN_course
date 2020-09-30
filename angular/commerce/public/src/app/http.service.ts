import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getProducts(){
    return this._http.get('/product')
  }

  createProduct(newProduct){
    return this._http.post('/product', newProduct)
  }

  deleteProduct(id){
    return this._http.delete('/product/destroy/'+id)
  }

  showProduct(id){
    return this._http.get('/product/'+id)
  }

  updateProduct(productToUpdate){
    return this._http.put('/product/'+productToUpdate._id, productToUpdate)
  }
}
