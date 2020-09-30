import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.scss']
})
export class EditAuthorComponent implements OnInit {
  author: any;
  authorToUpdate: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params.id)
      this._httpService.showAuthor(params.id).subscribe(data => {
        console.log('Here is the author to edit', data)
        this.authorToUpdate = data;
      })
    })
  }

  onSubmitToEdit(authorToUpdate){
    console.log("Hello",authorToUpdate)
    let observable = this._httpService.updateAuthor(authorToUpdate)
    observable.subscribe(data => {
      console.log('Updated author successfully ',data)
    })
    this._router.navigate(['/'])

  }
}
