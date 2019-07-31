import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtopicBranchComponent } from './subtopic-branch.component';

describe('SubtopicBranchComponent', () => {
  let component: SubtopicBranchComponent;
  let fixture: ComponentFixture<SubtopicBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtopicBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtopicBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
