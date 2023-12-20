import { TestBed } from '@angular/core/testing';

import { TablaLigaService } from './tabla-liga.service';

describe('TablaLigaService', () => {
  let service: TablaLigaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaLigaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
