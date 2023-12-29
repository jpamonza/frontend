import { Component, Input } from '@angular/core';
import { FixtureService } from '../../services/fixture.service';
import { Observable } from 'rxjs';
import { GameResult } from '../../models/get-fixtures.model';
import { Router } from '@angular/router';
import { EstadoService } from '@shared/services/estado.service';

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

  constructor(
    private fixtureService: FixtureService,
    private router: Router,
    private estadoService: EstadoService
  ) {
    console.log("Desde Tabla Equipo", this.estadoService.getPaisSeleccionado())
  }

  public irPaginaAnterior(): void {
    this.router.navigate(['..']);
  }
}
