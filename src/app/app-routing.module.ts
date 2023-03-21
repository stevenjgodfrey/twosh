import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootballResultsComponent } from './football-results.component';
import { TwoshComponent } from './twosh.component';

const routes: Routes = [
  { path: '', component: TwoshComponent }
 ,{ path: 'twosh-component', component: TwoshComponent }
 ,{ path: 'football-results-component', component: FootballResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
