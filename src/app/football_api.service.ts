import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { JsonFileService } from './jsonFile.service';

@Injectable({
    providedIn: 'root'
  })
export class FootballAPIService {

  constructor(private            http: HttpClient,
              private jsonFileService: JsonFileService) {
  }

  fixtures : any[]=[];

  getApiKey() {

    return this.http.get<any>('../assets/api_key.json');
//    return this.jsonFileService.readJsonFile('../../../../api_key/api_key.json');
  }
  /**
   * Get a list of fixtures for a team.
   * @param teamId The ID of the team.
   */

  getFixtures(teamId: number) {

    const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures';
    const params = {season: '2022', team: teamId, last:3 };
    // const api_key = 'f2e890f4b8msh8f43d65c72a6a67p1a5d28jsn360e4c2bbbe7';
    this.getApiKey().subscribe((data: any) => {
      console.log('data '||data)
      const api_key = data.response.api_key;
      console.log('api_key '||api_key);
      const headers = {'X-RapidAPI-Key': api_key,
                       'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                      };
      if (api_key !== null) {
      this.http.get(url, {params, headers}).subscribe((data: any) => {
        this.fixtures = data.response;
        console.log('fixtures '||this.fixtures)
        return this.fixtures;

      });
    }

    })
    return this.fixtures;
  }

    getLocalFixtures(teamId: number) {
      //const fileName = teamId.toString() + '_fixtures.json';
      const fileName ='LEE_fixtures.json';
      console.log(fileName|| ' fileName');
        return this.jsonFileService.readJsonFile(fileName);
        //this.http.get('http://localhost:4200/assets/LEE_fixtures.json');

  }
}
