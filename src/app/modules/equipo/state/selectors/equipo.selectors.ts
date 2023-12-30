import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EquipoState } from '../reducers';

export const selectEquipos = createFeatureSelector<EquipoState>('equipos');

export const selectEquipoActual = createSelector(
  selectEquipos,
  (state) => state.equipoActual
);

export const selectResultadosEquipoActual = createSelector(
  selectEquipos,
  (state) => state.listaEquipos[state.equipoActual] ?? []
);
