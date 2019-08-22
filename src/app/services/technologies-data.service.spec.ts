import { TestBed } from '@angular/core/testing';

import { TechnologiesDataService } from './technologies-data.service';

describe('TechnologiesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TechnologiesDataService = TestBed.get(TechnologiesDataService);
    expect(service).toBeTruthy();
  });
});
