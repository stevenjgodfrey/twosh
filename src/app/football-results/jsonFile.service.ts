import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, EMPTY } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JsonFileService {

  constructor(private http: HttpClient) { }
  fileContent : Observable<any> = EMPTY;
  jsonFileExist : boolean = false;

  jsonFileExists(name: string): Observable<boolean> {
    const filePath = '../assets/' + name;
    return this.http.head(filePath, { observe: 'response' }).pipe(
      map(response => response.status === 200),
      catchError(() => of(false))
    );
  }

  readJsonFile(name: string): Observable<any> {
    const filePath = '../assets/' + name;

    this.jsonFileExists(name).subscribe(exists => {
      this.jsonFileExist = exists;

    if (this.jsonFileExist===true) {
      this.fileContent = this.http.get<any>(filePath)
    }
    else {
      this.fileContent = this.http.get<any>('');
    }

    return this.fileContent;
    });
    return this.fileContent;

  }

  writeJsonFile(name: string, data: any): Observable<any> {
    const filePath = '../assets/' + name;
    return this.http.put<any>(filePath, data);
  }
}
