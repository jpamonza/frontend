import { createAction, props } from '@ngrx/store';
import { Standing } from '../../models/get-standings-response.model';

export const actualizarPaisSeleccionado = createAction(
  '[Liga] Actualizar Pais Seleccionado',
  props<{ pais: string }>()
);

export const tablaEquiposSolicitud = createAction("[Liga] Solicitud de Tabla Equipos");

export const tablaEquiposCargadaExitosamente = createAction(
  '[Liga] Tabla Equipos Cargada Exitosamente',
  props<{ equipos: Standing[] }>()
);
