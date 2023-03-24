import { Component, OnInit } from '@angular/core';
import { FootballAPIService } from './football_api.service';
import { JsonFileService } from './jsonFile.service';

@Component({
  selector: 'football-results',
  templateUrl: './football-results.component.html',
  styleUrls: ['../demo-styling.css']
})
export class FootballResultsComponent implements OnInit{
  constructor(private footballAPIService: FootballAPIService,
              private jsonFileService: JsonFileService) { }
  title = 'football-results';
  fixtures: any[] = [];

  ngOnInit(): void {


    this.footballAPIService.getLocalFixtures(63)
    .subscribe((data: any) => {
      this.fixtures = data.response;

      if (this.fixtures.length === 0) {

        this.footballAPIService.getFixtures(63).subscribe((data: any) => {
          this.fixtures = data.response;
          console.log('fixtures '||this.fixtures)
          return this.fixtures;

        });;

      }
    });


  }

}
