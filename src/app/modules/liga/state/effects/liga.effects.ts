import { Injectable } from '@angular/core';
import { TablaLigaService } from '../../services/tabla-liga.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { actualizarPaisSeleccionado } from '../actions';
import { switchMap } from 'rxjs';

@Injectable()
export class LigaEffect {
  public actualizarPaisSeleccionado$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actualizarPaisSeleccionado),
      switchMap(() => this.tablaService.getStandings('England'))
    ),
    { dispatch: false }
  );

  public constructor(
    public actions$: Actions,
    private tablaService: TablaLigaService
  ) {}
}
