import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import {
  GetStandingsResponse,
  Standing,
} from '../models/get-standings-response.model';

@Injectable()
export class TablaLigaService {
  constructor(private http: HttpClient) {}

  public getStandings(pais: string): Observable<Standing[]> {
    const id = this.getPaisId(pais);
    const season = new Date().getFullYear();
    return this.http
      .get<GetStandingsResponse>(
        `https://v3.football.api-sports.io/standings?league=${id}&season=${season}`
      )
      .pipe(
        map((result) => result.response[0].league.standings[0]),
        catchError((error: string) => [])
      );
  }

  private getPaisId(pais: string): number {
    const paises = {
      England: 39,
      Spain: 140,
      Germany: 78,
      Italy: 135,
      France: 61,
    };
    return paises[pais];
  }
}
