import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillReceiptComponent } from './bill-receipt.component';

describe('BillReceiptComponent', () => {
  let component: BillReceiptComponent;
  let fixture: ComponentFixture<BillReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
