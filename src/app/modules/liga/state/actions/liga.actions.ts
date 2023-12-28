import { createAction, props } from '@ngrx/store';

export const actualizarPaisSeleccionado = createAction(
  '[Liga] Actualizar Pais Seleccionado',
  props<{ pais: string }>()
);
