import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewAuthorComponent } from './new-author/new-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';


const routes: Routes = [
  {path: 'new', component: NewAuthorComponent},
  {path: 'edit/:id', component: EditAuthorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
