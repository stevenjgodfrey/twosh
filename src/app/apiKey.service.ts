import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class ApiKeyService {
  constructor(private http: HttpClient) {}

  getApiKey() {

    var apiKey: string;
    apiKey = 'test2';

    return this.http.get('/.netlify/functions/apiKey', {
      headers: {
        'Content-Type': 'application/json',
      },
    });

  }
}
