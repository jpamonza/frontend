import { Component, Input } from '@angular/core';
import { FixtureService } from '../../services/fixture.service';
import { Observable } from 'rxjs';
import { GameResult } from '../../models/get-fixtures.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-equipo',
  templateUrl: './tabla-equipo.component.html',
  styleUrls: ['./tabla-equipo.component.scss'],
})
export class TablaEquipoComponent {
  @Input() public set team(teamId: number) {
    this.fixtures = this.fixtureService.getFixtures(teamId, this.last);
      }
  @Input() public last: number = 10;

  public fixtures: Observable<GameResult[]>;
  public columnas: string[] = [
    'homeLogo',
    'homeName',
    'homeGoals',
    '-',
    'awayGoals',
    'awayName',
    'awayLogo',
  ];

  constructor(private fixtureService: FixtureService, private router: Router) {}

  public irPaginaAnterior(): void {
    this.router.navigate(['..']);
  }
}
