import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { EquipoEffects } from './equipo.effects';
import { provideMockStore } from '@ngrx/store/testing';
import { FixtureService } from '@equipo/services/fixture.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EquipoEffects', () => {
  let actions$: Observable<any>;
  let effects: EquipoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        EquipoEffects,
        provideMockActions(() => actions$),
        provideMockStore(),
        FixtureService,
      ],
    });

    effects = TestBed.inject(EquipoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
