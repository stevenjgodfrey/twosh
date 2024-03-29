import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootballResultsModule } from './football-results/football-results.module';
import { HomeComponent } from './home.component';
import { ModalModule } from './modal/modal.module';
import { PortfolioModule } from './portfolio/portfolio.module';


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
  bootstrap: [AppComponent]
})
export class AppModule { }
