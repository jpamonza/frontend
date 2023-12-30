import { GameResult } from '@equipo/models/get-fixtures.model';
import { createAction, props } from '@ngrx/store';
import { Dictionary } from '@shared/models';

export const fixtureEquipoSolicitado = createAction(
  '[Equipo] Fixture de Equipo Solicitado',
  props<{ equipoActual: number }>()
);
export const fixtureEquipoExitoso = createAction(
  '[Equipo] Fixture de Equipo Exitoso',
  props<{ gameResults: GameResult[] }>()
);
export const fixtureEquipoFallido = createAction(
  '[Equipo] Fixture de Equipo Fallido',
  props<{ error: Dictionary<string> }>()
);
