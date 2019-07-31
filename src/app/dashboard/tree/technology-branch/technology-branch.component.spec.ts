import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyBranchComponent } from './technology-branch.component';

describe('TechnologyBranchComponent', () => {
  let component: TechnologyBranchComponent;
  let fixture: ComponentFixture<TechnologyBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
