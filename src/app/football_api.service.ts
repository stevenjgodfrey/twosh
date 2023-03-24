import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonFileService } from './jsonFile.service';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class FootballAPIService {

  constructor(private            http: HttpClient,
              private jsonFileService: JsonFileService) {
  }

  fixtures : any[]=[];

  getApiKey() {

    return environment.apiKey;
//    return this.jsonFileService.readJsonFile('../../../../api_key/api_key.json');
  }
  /**
   * Get a list of fixtures for a team.
   * @param teamId The ID of the team.
   */

  getFixtures(teamId: number) {

    const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures';
    const params = {season: '2022', team: teamId, last:3 };
    const api_key = this.getApiKey();
    console.log('api_key '||api_key);
    const headers = {'X-RapidAPI-Key': api_key,
                       'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                    };
    return   this.http.get(url, {params, headers})

  }

    getLocalFixtures(teamId: number) {
      //const fileName = teamId.toString() + '_fixtures.json';
      const fileName ='LEE_fixtures.json';
      console.log(fileName|| ' fileName');
        return this.jsonFileService.readJsonFile(fileName);
        //this.http.get('http://localhost:4200/assets/LEE_fixtures.json');

  }
}
