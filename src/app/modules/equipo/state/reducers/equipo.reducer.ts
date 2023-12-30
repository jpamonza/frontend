import { GameResult } from '@equipo/models/get-fixtures.model';
import { createReducer, on } from '@ngrx/store';
import { fromEquipo } from '../actions';
import { Dictionary } from '@shared/models';

export const equipoFeatureKey = 'equipo';

export interface EquipoState {
  equipoActual: number;
  listaEquipos: Dictionary<GameResult[]>;
}

export const initialState: EquipoState = {
  equipoActual: null,
  listaEquipos: {},
};

export const equipoReducer = createReducer(
  initialState,
  on(
    fromEquipo.fixtureEquipoSolicitado,
    (state, { equipoActual }): EquipoState => ({
      ...state,
      equipoActual,
    })
  ),
  on(fromEquipo.fixtureEquipoExitoso, (state, { gameResults }): EquipoState => {
    return {
      ...state,
      listaEquipos: {
        ...state.listaEquipos,
        [state.equipoActual]: gameResults,
      },
    };
  })
);
