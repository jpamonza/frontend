import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { fromEquipo } from '../actions';
import { Store } from '@ngrx/store';
import { fromEquipoSelectors } from '../selectors';
import { switchMap } from 'rxjs';
import { FixtureService } from '@equipo/services/fixture.service';

@Injectable()
export class EquipoEffects {
  public fixtureEquipoSolicitado$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromEquipo.fixtureEquipoSolicitado),
      concatLatestFrom(() => [
        this.store.select(fromEquipoSelectors.selectEquipoActual),
      ]),
      switchMap(([action, equipoActual]) =>
        this.fixtureService
          .getFixtures(equipoActual)
          .pipe(
            switchMap((respuesta) => [
              fromEquipo.fixtureEquipoExitoso({ gameResults: respuesta }),
            ]),
          )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store,
    private fixtureService: FixtureService
  ) {}
}
