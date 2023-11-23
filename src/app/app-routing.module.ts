import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootballResultsComponent } from './football-results/football-results.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent }
 ,{ path: 'home', component: HomeComponent }
 ,{ path: 'football-results', component: FootballResultsComponent }
 ,{ path: 'portfolio', component: PortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
