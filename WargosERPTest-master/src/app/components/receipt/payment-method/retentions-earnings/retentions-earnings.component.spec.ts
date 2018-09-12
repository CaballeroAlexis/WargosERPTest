import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetentionsEarningsComponent } from './retentions-earnings.component';

describe('RetentionsEarningsComponent', () => {
  let component: RetentionsEarningsComponent;
  let fixture: ComponentFixture<RetentionsEarningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetentionsEarningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetentionsEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
