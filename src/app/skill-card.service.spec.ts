import { TestBed } from '@angular/core/testing';

import { SkillCardService } from './skill-card.service';

describe('SkillCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkillCardService = TestBed.get(SkillCardService);
    expect(service).toBeTruthy();
  });
});
