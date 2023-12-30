import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { EquipoEffects } from './equipo.effects';

describe('EquipoEffects', () => {
  let actions$: Observable<any>;
  let effects: EquipoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EquipoEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(EquipoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
