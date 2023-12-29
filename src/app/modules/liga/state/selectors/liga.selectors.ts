import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LigaState } from '../reducers';

export const selectLigaState = createFeatureSelector<LigaState>('ligas');
export const selectPaisSeleccionado = createSelector(
  selectLigaState,
  (state) => state.paisSeleccionado
);

export const selectEquipos = createSelector(
  selectLigaState,
  (state) => state.equipos
);

export const selectEstaCargando = createSelector(
  selectLigaState,
  (state) => state.estaCargando
);