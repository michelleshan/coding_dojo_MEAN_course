import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetRacesComponent } from './race/get-races/get-races.component';
import { ShowRaceComponent } from './race/show-race/show-race.component';
import { UserComponent } from './user/user.component';
import { HttpService } from './http.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewRaceComponent } from './race/new-race/new-race.component';
import { EditRaceComponent } from './race/edit-race/edit-race.component';

@NgModule({
  declarations: [
    AppComponent,
    GetRacesComponent,
    ShowRaceComponent,
    UserComponent,
    PageNotFoundComponent,
    NewRaceComponent,
    EditRaceComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
