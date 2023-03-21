import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FootballAPIService {
  private readonly API_URL = 'https://api.football-data.org/v2';
  private readonly API_KEY = '<YOUR_API_KEY_HERE>';

  constructor(private http: HttpClient,
              private httlpHandler: HttpHandler) { }

  /**
   * Get a list of matches for a specific competition and matchday.
   * @param competitionId The ID of the competition.
   * @param matchday The matchday number.
   */
  getMatchesForCompetition(competitionId: number, matchday: number) {
    const url = `${this.API_URL}/competitions/${competitionId}/matches?matchday=${matchday}`;
    return this.http.get(url, { headers: { 'X-Auth-Token': this.API_KEY } });
  }

  /**
   * Get a list of standings for a specific competition.
   * @param competitionId The ID of the competition.
   */
  getStandingsForCompetition(competitionId: number) {
    const url = `${this.API_URL}/competitions/${competitionId}/standings`;
    return this.http.get(url, { headers: { 'X-Auth-Token': this.API_KEY } });
  }

  /**
   * Get a list of teams for a specific competition.
   * @param competitionId The ID of the competition.
   */
  getTeamsForCompetition(competitionId: number) {
    const url = `${this.API_URL}/competitions/${competitionId}/teams`;
    return this.http.get(url, { headers: { 'X-Auth-Token': this.API_KEY } });
  }

  getFixtures(teamId: number) {
  
 //   const axios = require("axios");

    const options = {
         method: 'GET',
         url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params: {season: '2022', team: teamId},
        headers: {
            'X-RapidAPI-Key': 'f2e890f4b8msh8f43d65c72a6a67p1a5d28jsn360e4c2bbbe7',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

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
