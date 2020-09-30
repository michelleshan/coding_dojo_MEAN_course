import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Favorite Authors';
  authors: any = [];
  author: any;

  constructor(private _httpService: HttpService){
  }

  ngOnInit(){
    this.getAuthors();
  }

  getAuthors(){
    let observable = this._httpService.getAuthors()
    observable.subscribe(data => {
      console.log('Here are the authors ',data)
      this.authors = data;
    })
  }

  onClick(author){
    // console.log('clicked to delete this author ',author._id)
    let observable = this._httpService.deleteAuthor(author._id)
    observable.subscribe(data => {
      console.log('Deleted author successfully ',data)
    })
    this.getAuthors()
  }
}
