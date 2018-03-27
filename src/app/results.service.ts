import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Result } from './result';

@Injectable()
export class ResultsService {

  private _url = 'http://localhost:8000/';
  constructor(private http: HttpClient) { }

  getResults(key): Observable<Result[]> {
    return this.http.get<Result[]>(this._url + key);
  }
}
