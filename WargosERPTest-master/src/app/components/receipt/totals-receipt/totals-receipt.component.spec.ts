import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsReceiptComponent } from './totals-receipt.component';

describe('TotalsReceiptComponent', () => {
  let component: TotalsReceiptComponent;
  let fixture: ComponentFixture<TotalsReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalsReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalsReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
