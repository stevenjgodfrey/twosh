import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootballResultsComponent } from './football-results.component';
import { FootballAPIService } from './football_api.service';
import { TwoshComponent } from './twosh.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoshComponent,
    FootballResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
    

  ],
  providers: [FootballAPIService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
