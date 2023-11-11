import { Component, OnInit } from '@angular/core';
import { FootballAPIService } from './football_api.service';
import { JsonFileService } from './jsonFile.service';
import { switchMap } from 'rxjs/operators';
import { ApiKeyService } from './apiKey.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'football-results',
  templateUrl: './football-results.component.html',
  styleUrls: ['../demo-styling.css']
})
export class FootballResultsComponent implements OnInit{
  constructor(private footballAPIService: FootballAPIService,
              private jsonFileService: JsonFileService,
              private apiKeyService: ApiKeyService,
              private            http: HttpClient
              ) { }
  title = 'football-results';
  fixtures: any[] = [];
  apiKey: string = '';

  ngOnInit(): void {


    //this.footballAPIService.getLocalFixtures(63)
    //.subscribe((data: any) => {
    //  this.fixtures = data.response;

      if (this.fixtures.length === 0) {


        const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures';
        const params = {season: '2023', team: 63, last:4 };

         const op = this.apiKeyService.getApiKey().pipe(
                          switchMap((data: any) => {
                          this.apiKey = data.message;
                          console.log(this.apiKey + " subscribe");
                          const headers = {'X-RapidAPI-Key': this.apiKey,
                          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                       };
                       return this.http.get(url, {params, headers});
                    }));


                    op.subscribe((data: any) => {
                      this.fixtures = data.response;
                      console.log('fixtures '||this.fixtures)
                    });

         /* this.footballAPIService.getFixtures(63).subscribe((data: any) => {
            this.fixtures = data.response;
            console.log('fixtures '||this.fixtures)
            return this.fixtures;

          });;*/

        };

      }
    //});


  }


