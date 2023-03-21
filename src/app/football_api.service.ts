import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
    providedIn: 'root'
  })
export class FootballAPIService {

  constructor(private http: HttpClient) {
  }


  /**
   * Get a list of fixtures for a team.
   * @param teamId The ID of the team.
   */

  getFixtures(teamId: number) {

    const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures';
    const params = {season: '2022', team: teamId,  from: '2023-01-21', to: '2023-03-21' };
    const headers = {'X-RapidAPI-Key': 'f2e890f4b8msh8f43d65c72a6a67p1a5d28jsn360e4c2bbbe7',
                     'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }

    return this.http.get(url,
                         { params, headers});


    }

    getLocalFixtures(teamId: number) {
        return this.http.get('http://localhost:4200/assets/LEE_fixtures.json');

    }
}
