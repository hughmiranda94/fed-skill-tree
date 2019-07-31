import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyContentComponent } from './technology-content.component';

describe('TechnologyContentComponent', () => {
  let component: TechnologyContentComponent;
  let fixture: ComponentFixture<TechnologyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
