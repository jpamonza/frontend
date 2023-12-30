import { TestBed } from '@angular/core/testing';

import { TablaLigaService } from './tabla-liga.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TablaLigaService', () => {
  let service: TablaLigaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TablaLigaService],
    });
    service = TestBed.inject(TablaLigaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
