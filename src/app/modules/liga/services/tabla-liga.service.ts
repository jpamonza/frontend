import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TablaLigaService {
  constructor(private http: HttpClient) {}

  public getStandings(): Observable<object> {
    return this.http.get(
      'https://v3.football.api-sports.io/standings?league=39&season=2019',
      {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-rapidapi-key': '01e1a9b3527add0f82b973aadfc8e861',
        },
      }
    );
  }
}
