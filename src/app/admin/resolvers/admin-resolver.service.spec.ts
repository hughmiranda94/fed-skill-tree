import { TestBed } from '@angular/core/testing';

import { ReferenceResolverService } from './admin-resolver.service';

describe('ReferenceResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReferenceResolverService = TestBed.get(ReferenceResolverService);
    expect(service).toBeTruthy();
  });
});
