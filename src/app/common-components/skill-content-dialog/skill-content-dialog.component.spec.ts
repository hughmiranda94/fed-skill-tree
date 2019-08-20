import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillContentDialogComponent } from './skill-content-dialog.component';

describe('SkillContentDialogComponent', () => {
  let component: SkillContentDialogComponent;
  let fixture: ComponentFixture<SkillContentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillContentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillContentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
