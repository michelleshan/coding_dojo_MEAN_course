import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetRacesComponent } from './race/get-races/get-races.component';
import { ShowRaceComponent } from './race/show-race/show-race.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditRaceComponent } from './race/edit-race/edit-race.component';
import { NewRaceComponent } from './race/new-race/new-race.component';

const routes: Routes = [
  { path: 'dashboard', component: GetRacesComponent },
  { path: 'race/new', component: NewRaceComponent },
  { path: 'race/:id', component: ShowRaceComponent },
  { path: 'race/:id/edit', component: EditRaceComponent },
  { path: 'profile/:id', component: UserComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
