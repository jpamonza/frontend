import { TestBed } from '@angular/core/testing';

import { EquipoGuard } from './equipo.guard';
import { provideMockStore } from '@ngrx/store/testing';

describe('EquipoGuard', () => {
  let guard: EquipoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
    });
    guard = TestBed.inject(EquipoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
