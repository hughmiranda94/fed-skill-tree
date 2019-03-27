import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafDetailComponent } from './leaf-detail.component';

describe('LeafDetailComponent', () => {
  let component: LeafDetailComponent;
  let fixture: ComponentFixture<LeafDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
