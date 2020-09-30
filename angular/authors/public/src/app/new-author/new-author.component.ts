import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.scss']
})
export class NewAuthorComponent implements OnInit {
  newAuthor: object;

  constructor(private _httpService: HttpService, private router: Router) {
  }

  ngOnInit() {
    this.newAuthor = {name: ""}
  }

  onSubmit(){
    let observable = this._httpService.createAuthor(this.newAuthor)
    observable.subscribe(data => {
      console.log('New author successfully created ', data)
    })
    this.newAuthor = {name: ""}
    this.router.navigate(['/'])
  }
}
