import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootballResultsComponent } from './football-results.component';
import { TwoshComponent } from './twosh.component';
import { MatchesComponent } from './matches.component';

const routes: Routes = [
  { path: '', component: TwoshComponent }
 ,{ path: 'twosh-component', component: TwoshComponent }
 ,{ path: 'football-results-component', component: FootballResultsComponent }
 ,{ path: 'matches-component', component: MatchesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
