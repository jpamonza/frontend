import { Injectable } from '@angular/core';
import { TablaLigaService } from '../../services/tabla-liga.service';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import {
  actualizarPaisSeleccionado,
  tablaEquiposCargadaExitosamente,
  tablaEquiposSolicitud,
} from '../actions';
import { catchError, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectPaisSeleccionado } from '../selectors/liga.selectors';

@Injectable()
export class LigaEffect {
  public actualizarPaisSeleccionado$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actualizarPaisSeleccionado),
      switchMap(() => [tablaEquiposSolicitud()])
    );
  });

  public tablaEquiposSolicitud$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(tablaEquiposSolicitud), // action actual
      concatLatestFrom(() => [this.store.select(selectPaisSeleccionado)]), // [action actual , pais seleccionado]
      switchMap((arregloValores) => {
        const action = arregloValores[0];
        const paisSeleccionado = arregloValores[1];

        const servicio = this.tablaService.getStandings(paisSeleccionado);
        return servicio.pipe(
          switchMap((respuesta) => [
            tablaEquiposCargadaExitosamente({ equipos: respuesta }),
          ]),
          catchError((error) => [])
        );
      })
    );
  });

  public constructor(
    private actions$: Actions,
    private tablaService: TablaLigaService,
    private store: Store
  ) {}
}
