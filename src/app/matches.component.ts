import { Component, OnInit } from '@angular/core';
import { FootballAPIService } from './football_api.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styles: []
})
export class MatchesComponent implements OnInit {
  competitionId = 2021; // Premier League
  matchday = 1;
  matches: any[] = []

  constructor(private footballAPIService: FootballAPIService) { }

  ngOnInit(): void {
    this.footballAPIService.getMatchesForCompetition(this.competitionId, this.matchday)
      .subscribe((data: any) => {
        this.matches = data.matches;
      });
  }
}
