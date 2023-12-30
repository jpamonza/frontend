import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FixtureService } from './fixture.service';

describe('FixtureService', () => {
  let service: FixtureService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FixtureService],
    });
    service = TestBed.inject(FixtureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
