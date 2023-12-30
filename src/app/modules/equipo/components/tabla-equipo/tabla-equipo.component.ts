import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GameResult } from '../../models/get-fixtures.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectResultadosEquipoActual } from '@equipo/state/selectors/equipo.selectors';

@Component({
  selector: 'app-tabla-equipo',
  templateUrl: './tabla-equipo.component.html',
  styleUrls: ['./tabla-equipo.component.scss'],
})
export class TablaEquipoComponent {
  public fixtures: Observable<GameResult[]> = this.store.select(
    selectResultadosEquipoActual
  );
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
    private router: Router,
    private store: Store
  ) {}

  public irPaginaAnterior(): void {
    this.router.navigate(['..']);
  }
}
