// achievements.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AchievementsService {
  private dataUrl = 'assets/achievements.json'; // Adjust the path accordingly

  constructor(private http: HttpClient) {}

  getData(fieldType: string): Observable<any[]> {
    this.dataUrl = 'assets/' + fieldType + '.json';
    return this.http.get<any[]>(this.dataUrl);
  }


}
