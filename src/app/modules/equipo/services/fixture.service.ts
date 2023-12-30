import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { GameResult, GetFixturesResponse } from '../models/get-fixtures.model';

@Injectable()
export class FixtureService {
  constructor(private http: HttpClient) {}

  public getFixtures(team: number, last: number = 10): Observable<GameResult[]> {
    return this.http
      .get<GetFixturesResponse>(
        `https://v3.football.api-sports.io/fixtures?team=${team}&last=${last}`
      )
      .pipe(
        map((result) => result.response),
        catchError((error: string) => [])
      );
  }
}
