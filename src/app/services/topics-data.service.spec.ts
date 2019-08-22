import { TestBed } from '@angular/core/testing';

import { TopicsDataService } from './topics-data.service';

describe('TopicsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopicsDataService = TestBed.get(TopicsDataService);
    expect(service).toBeTruthy();
  });
});
