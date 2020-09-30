import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { DallasComponent } from './dallas/dallas.component';
import { SeattleComponent } from './seattle/seattle.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DcComponent } from './dc/dc.component';

@NgModule({
  declarations: [
    AppComponent,
    DallasComponent,
    SeattleComponent,
    ChicagoComponent,
    SanJoseComponent,
    BurbankComponent,
    DcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
