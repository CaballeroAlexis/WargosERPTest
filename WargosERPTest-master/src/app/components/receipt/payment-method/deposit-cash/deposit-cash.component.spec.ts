import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositCashComponent } from './deposit-cash.component';

describe('DepositCashComponent', () => {
  let component: DepositCashComponent;
  let fixture: ComponentFixture<DepositCashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositCashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
