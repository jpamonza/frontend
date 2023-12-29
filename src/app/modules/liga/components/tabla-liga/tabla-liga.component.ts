import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Standing } from '../../models/get-standings-response.model';
import { Store } from '@ngrx/store';
import {
  selectEquipos,
  selectEstaCargando,
} from '../../state/selectors/liga.selectors';
import { tablaEquiposSolicitud } from '../../state/actions';

@Component({
  selector: 'app-tabla-liga',
  templateUrl: './tabla-liga.component.html',
  styleUrls: ['./tabla-liga.component.scss'],
})
export class TablaLigaComponent implements OnInit {
  public equipos: Observable<Standing[]> = this.store.select(selectEquipos);
  public estaCargando: Observable<boolean> =
    this.store.select(selectEstaCargando);
  public columnas: string[] = [
    'rank',
    'logo',
    'name',
    'games',
    'wins',
    'loses',
    'draw',
    'goalsDiff',
    'points',
  ];

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(tablaEquiposSolicitud());
  }

  public verPartidos(equipo: string): void {
    console.log('ver partidos de:', equipo);
  }
}
