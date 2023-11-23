import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonFileService } from './jsonFile.service';
import { switchMap } from 'rxjs/operators';
import { ApiKeyService } from '../apiKey.service';
@Injectable({
    providedIn: 'root'
  })
export class FootballAPIService {

  constructor(private http: HttpClient,
              private jsonFileService: JsonFileService,
              private apiKeyService: ApiKeyService) {
  }

  fixtures : any[]=[];
  apiKey: string = '';
  /**
   * Get a list of fixtures for a team.
   * @param teamId The ID of the team.
   */

  getFixtures(teamId: number) {

    const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures';
    const params = {season: '2023', team: teamId, last:4 };

     return this.apiKeyService.getApiKey().pipe(
                      switchMap((data: any) => {
                      this.apiKey = data.response;
                      console.log(this.apiKey + " subscribe");
                      const headers = {'X-RapidAPI-Key': this.apiKey,
                      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                   };

                    return   this.http.get(url, {params, headers});
                })
                );
  }

    getLocalFixtures(teamId: number) {
      const fileName ='LEE_fixtures.json';
      console.log(fileName|| ' fileName');
        return this.jsonFileService.readJsonFile(fileName);
        //this.http.get('http://localhost:4200/assets/LEE_fixtures.json');

  }
}
