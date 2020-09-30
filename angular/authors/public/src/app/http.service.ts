import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors(){
    return this._http.get('/authors')
  }

  createAuthor(newAuthor){
    return this._http.post('/author', newAuthor)
  }

  deleteAuthor(id){
    return this._http.delete('/author/destroy/'+id)
  }

  showAuthor(id){
    return this._http.get('/author/'+id)
  }

  updateAuthor(authorToUpdate){
    return this._http.put('/author/'+authorToUpdate._id, authorToUpdate)
  }
}

