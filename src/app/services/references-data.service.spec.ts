import { TestBed } from '@angular/core/testing';

import { ReferencesDataService } from './references-data.service';

describe('ReferencesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReferencesDataService = TestBed.get(ReferencesDataService);
    expect(service).toBeTruthy();
  });
});
