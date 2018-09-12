import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetentionsIibbComponent } from './retentions-iibb.component';

describe('RetentionsIibbComponent', () => {
  let component: RetentionsIibbComponent;
  let fixture: ComponentFixture<RetentionsIibbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetentionsIibbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetentionsIibbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
