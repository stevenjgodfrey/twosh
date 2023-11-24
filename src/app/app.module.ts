import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioModule } from './portfolio/portfolio.module';
import { HomeComponent } from './home.component';
import { FootballResultsModule } from './football-results/football-results.module';
import { ModalComponent } from './modal/modal.component';
import { DataService } from './data.service';
import { ModalModule } from './modal/modal.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PortfolioModule,
    FootballResultsModule,
    ModalModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
