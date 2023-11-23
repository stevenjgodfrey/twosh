import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FootballResultsComponent } from './football-results.component';
import { FootballAPIService } from './football_api.service';
import { JsonFileService } from './jsonFile.service';


@NgModule({
  declarations: [
    FootballResultsComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    FootballResultsComponent
  ],
  providers: [FootballAPIService
             ,JsonFileService],
  bootstrap: [FootballResultsComponent]
})
export class FootballResultsModule { }
