import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAtrributeComponent } from './item-atrribute.component';

describe('ItemAtrributeComponent', () => {
  let component: ItemAtrributeComponent;
  let fixture: ComponentFixture<ItemAtrributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAtrributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAtrributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
