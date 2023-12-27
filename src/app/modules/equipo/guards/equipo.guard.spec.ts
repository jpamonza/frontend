import { TestBed } from '@angular/core/testing';

import { EquipoGuard } from './equipo.guard';

describe('EquipoGuard', () => {
  let guard: EquipoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EquipoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
