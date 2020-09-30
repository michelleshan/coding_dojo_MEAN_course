import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DallasComponent } from './dallas/dallas.component';
import { SeattleComponent } from './seattle/seattle.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { DcComponent } from './dc/dc.component';
import { BurbankComponent } from './burbank/burbank.component';

const routes: Routes = [ 
  { path: '', pathMatch: 'full', redirectTo: 'dallas'},
  { path: 'dallas', component: DallasComponent },
  { path: 'seattle', component: SeattleComponent },
  { path: 'chicago', component: ChicagoComponent },
  { path: 'sanjose', component: SanJoseComponent },
  { path: 'burbank', component: BurbankComponent},
  { path: 'dc', component: DcComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
