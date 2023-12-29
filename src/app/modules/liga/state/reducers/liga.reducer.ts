import { ActionReducer, createReducer, on } from '@ngrx/store';
import {
  actualizarPaisSeleccionado,
  tablaEquiposCargadaExitosamente,
} from '../actions';
import { Standing } from '../../models/get-standings-response.model';

export interface LigaState {
  paisSeleccionado: string;
  // equipos: {England: Standing[], France: Standing[]...};
  equipos: Standing[];
  estaCargando: boolean;
}

const initialState: LigaState = {
  paisSeleccionado: 'England',
  equipos: [],
  estaCargando: true,
};

export const ligaReducer: ActionReducer<LigaState> = createReducer(
  initialState,
  on(actualizarPaisSeleccionado, (estadoAnterior, action): LigaState => {
    const nuevoEstado: LigaState = { ...estadoAnterior };

    nuevoEstado.paisSeleccionado = action.pais;
    nuevoEstado.estaCargando = true;

    return nuevoEstado;
  }),
  on(tablaEquiposCargadaExitosamente, (estadoAnterior, action): LigaState => {
    const nuevoEstado: LigaState = { ...estadoAnterior };

    nuevoEstado.equipos = action.equipos;
    nuevoEstado.estaCargando = false;

    return nuevoEstado;
  })
);
