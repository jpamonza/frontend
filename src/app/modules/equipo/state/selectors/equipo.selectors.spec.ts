import { fromEquipoSelectors } from '.';
import { EquipoState } from '../reducers';

describe('Equipo Selectors', () => {
  it('should select the EquipoActual value', () => {
    const mockState: EquipoState = {
      equipoActual: 50,
      listaEquipos: {},
    };

    expect(fromEquipoSelectors.selectEquipoActual({ equipos: mockState })).toBe(
      50
    );
  });
});
