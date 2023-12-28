import { ActionReducer, createReducer, on } from '@ngrx/store';
import { actualizarPaisSeleccionado } from '../actions';

export interface LigaState {
  paisSeleccionado: string;
}

const initialState: LigaState = {
  paisSeleccionado: 'England',
};

export const ligaReducer: ActionReducer<LigaState> = createReducer(
  initialState,
  on(actualizarPaisSeleccionado, (estadoAnterior, action): LigaState => {
    const nuevoEstado: LigaState = { ...estadoAnterior };

    nuevoEstado.paisSeleccionado = action.pais;

    return nuevoEstado;
  })
);
