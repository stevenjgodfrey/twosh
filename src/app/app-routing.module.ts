import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootballResultsComponent } from './football-results.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TwoshComponent } from './twosh.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent }
 ,{ path: 'twosh-component', component: TwoshComponent }
 ,{ path: 'football-results-component', component: FootballResultsComponent }
 ,{ path: 'portfolio', component: PortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
