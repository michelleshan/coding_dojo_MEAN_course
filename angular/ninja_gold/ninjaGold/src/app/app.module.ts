import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { HistoryComponent } from './history/history.component';
import { BuildingManagerComponent } from './building-manager/building-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    HistoryComponent,
    BuildingManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
