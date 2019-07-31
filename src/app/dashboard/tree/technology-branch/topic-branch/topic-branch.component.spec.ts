import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicBranchComponent } from './topic-branch.component';

describe('TopicBranchComponent', () => {
  let component: TopicBranchComponent;
  let fixture: ComponentFixture<TopicBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
