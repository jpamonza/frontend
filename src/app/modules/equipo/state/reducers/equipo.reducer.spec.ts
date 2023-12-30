import { equipoReducer, initialState } from './equipo.reducer';

describe('Equipo Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = equipoReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
